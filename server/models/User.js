const mongoose = require('mongoose')
const { Schema } = mongoose // this is called destructing in ES6. Same as saying const Schema = mongoose.Schema

const userSchema = new Schema({
  googleID: String,
})

mongoose.model('users', userSchema)
