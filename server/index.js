const express = require('express')
const passport = reuqire('passport')
const googleStrategy = require('passport-google-oauth20').Strategy

const app = express()

passport.use(new googleStrategy())

const PORT = process.env.PORT || 5000
app.listen(PORT)
