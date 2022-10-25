const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

const courses = require('./data/courses.json')
const blogs = require('./data/blogs.json')

app.get('/', (req, res) => {
    res.send('Working properly')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/blogs', (req, res) => {
    res.send(blogs)
})

app.listen(port, () =>{
    console.log(`WEB-HUNT listening on port ${port}`)
})