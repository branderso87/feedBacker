const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({poop:'poopy'})
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
