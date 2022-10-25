const express = require('express')
const app = express()

const port = process.env.PORT || 5000


const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('Working properly')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.listen(port, () =>{
    console.log(`WEB-HUNT listening on port ${port}`)
})