const passport = require('passport')
const googleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users')

//take user model and turn into identifiable key for cookie
passport.serializeUser((user, done) => {
  done(null, user.id)
})

//turn key abck into user
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    })
})

passport.use(
  new googleStrategy({
    clientID: keys.googleClientID, //get clientID from keys
    clientSecret: keys.googleClientSecret, //get client Secret from keys
    callbackURL: '/auth/google/callback', //redirect to this route after authorization
    proxy: true
  },
   async (accessToken, refreshToken, profile, done) => {
    const existingUserawait = User.findOne({googleID: profile.id})

    if(existingUser) {
      //we already have a record with the given profile ID
      return done(null, existingUser)
    }
    //we don't have a user record ith this ID, make a new record
    const user = await new User({googleID: profile.id}).save()
    done(null, user) //verified that it was saved to DB and pushes to serializeUser
  })
)
