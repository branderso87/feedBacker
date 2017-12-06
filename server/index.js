const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
require('./models/User')//should pull in models before we run passport
require('./services/passport')

mongoose.connect(keys.mongoURI)

const app = express()

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days in milliseconds
    keys:[keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)


const PORT = process.env.PORT || 5000
app.listen(PORT)


//can also write as
//const express = require('express')
// require('./services/passport')
// const authRoutes = require('./routes/authRoutes')
//
// const app = express()
// authRoutes(app)
