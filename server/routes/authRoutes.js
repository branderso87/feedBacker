const passport = require('passport')

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  })
  )
  app.get('/auth/google/callback', passport.authenticate('google'))//there is a code now attatched to the callback url to be used to grab profile from google

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.send(req.user)
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })
}
