const passport = require('passport')
const googleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')

passport.use(
  new googleStrategy({
    clientID: keys.googleClientID, //get clientID from keys
    clientSecret: keys.googleClientSecret, //get client Secret from keys
    callbackURL: '/auth/google/callback' //redirect to this route after authorization
  },
  (accessToken, refreshToken, profile, done) => {
    console.log('accessToken', accessToken)
    console.log('refreshToken', refreshToken)
    console.log('profile', profile)
  })
)
