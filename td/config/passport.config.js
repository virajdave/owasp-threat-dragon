'use strict';

var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var TrelloStrategy = require('passport-trello').Strategy;
var cryptoHelper = require('../helpers/encryption.helper');

function passportConfig(app) {

    app.use(passport.initialize());
    app.use(passport.session());

    //github sigin
    passport.use(new GitHubStrategy({
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            failureRedirect: 'login/github',
            scope: ['public_repo']
        },
        function (accessToken, refreshToken, profile, done) {
            return done(null, {profile: profile, accessToken: accessToken});
        }));

    passport.use(new TrelloStrategy(
        {
            consumerKey: process.env.TRELLO_CLIENT_ID,
            consumerSecret: process.env.TRELLO_CLIENT_SECRET,
            callbackURL: 'login/github',
            passReqToCallback: false,
            trelloParams: {
                scope: {read: true, write: true, account: true},
                name: "OWASP Threat Dragon",
                expiration: "30days"
            }
        },
        function (req, token, tokenSecret, profile, done) {
            return done(null, {profile: profile, req: req});
        }
    ));

    //serialisation/deserialisation of users
    //session contains sensitive info like access tokens so encrypt it before storage

    //encrypt is async to avoid blocking when generating random iv
    passport.serializeUser(function (user, done) {
        var userToStore = {accessToken: user.accessToken,
            profile: {
                username: user.profile.username,
                provider: user.profile.provider,
                repos_url: user.profile._json.repos_url
            }
        };
        cryptoHelper.encrypt(JSON.stringify(userToStore), function (cipherText) {
            done(null, cipherText);
        });
    });

    //decrypt is syncronous because there is no blocking code  
    passport.deserializeUser(function (obj, done) {
        var user = JSON.parse(cryptoHelper.decrypt(obj));
        done(null, user);
    });

}module.exports = passportConfig;
