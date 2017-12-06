const passport = require('passport')

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  })
  )
  app.get('/auth/google/callback', passport.authenticate('google'))//there is a code now attatched to the callback url to be used to grab profile from google
}
