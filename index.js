const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const courses = require('./Data/courses.json')

app.use(cors())

app.get('/courses', (req, res) => {
    res.send(courses)
  })

app.get('/', (req, res) => {
  res.send('Hello Kamal!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})