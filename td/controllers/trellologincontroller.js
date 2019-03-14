'use  strict';
var passport = require('passport');
var TrelloStrategy = require('passport-trello').Strategy;
var trellologincontroller = {};

//redirect to trello with csrf protection
trellologincontroller.doLogin = function(req, res, next) {
    console.log("starting doLongTrello");
    if(!req.session.trelloOauthState) {
            passport.authenticate('trello', {state: req.session.trelloOauthState})(req, res, next),
                function (req, res) {
                    console.log("doLongTrello authenticate not in system")
                    res.redirect(req.originalUrl);
                    console.log("resposne: " + res);
                }
    /*
        console.log("!req starting doLongTrello")

        require('crypto').randomBytes(32, function (err, buffer) {
            var state = buffer.toString('hex');
            req.session.trelloOauthState = state;
            console.log("state:"+ state);
            console.log("in require of dologin"+err);
            passport.authenticate('trello'),
                function (req, res){
                    console.log("doLongTrello authenticate not in system")
                    res.redirect(req.originalUrl);
                    console.log("resposne: "+res);
                }
            console.log("in dotrello"+err);
        });
    */
    } else {
        passport.authenticate('trello'),(req, res),
            function (req, res){
            console.log("did the other one for already having a state");
                res.redirect(req.originalUrl);
            };
    }
    console.log("CompletedTrello doLogin");
    /*
    if (!req.session.githubOauthState) {
        require('crypto').randomBytes(32, function(err, buffer) {
            var state = buffer.toString('hex');
            req.session.githubOauthState = state;
            passport.authenticate('github', { state: state })(req, res, next);
        });
    } else {
        passport.authenticate('github')(req, res, next);
    }
    */
};

//complete trello oauth sign in with csrf protection
trellologincontroller.completeLogin = function(req, res) {

    var expectedState = req.session.trelloOauthState;
    var incomingState = req.query.state;
    delete req.session.trelloOauthState;

    if(!incomingState || expectedState != incomingState)
    {
        req.log.error({security: true, idp: 'trello'}, 'invalid oauth state value');
        res.status(400).send('Threat Dragon received an invalid request from Trello. Your internet connection may not be secure!');
    } else {
        req.log.info({ security: true, userName: req.user.profile.username, idp: req.user.profile.provider }, 'logged in');
        var returnTo = req.session.returnTo;
        delete req.session.returnTo;
        res.redirect(returnTo || '/');
    }
};

module.exports = trellologincontroller;