const express = require('express')
const passport = require('passport')
const googleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys')

const app = express()

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
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
  })
)
app.get('/auth/google/callback', passport.authenticate('google'))//there is a code now attatched to the callback url to be used to grab profile from google




const PORT = process.env.PORT || 5000
app.listen(PORT)
