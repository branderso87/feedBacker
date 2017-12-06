const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./services/passport')
require('./models/User')

mongoose.connect(keys.mongoURI)

const app = express()
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
