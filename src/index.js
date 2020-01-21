const express = require('express')
const mongoose = require('mongoose')
const env = require('dotenv')
const app = express()

const dbHandler = require('./db-handler')

let port = 3300

// Import Routes
const authRoute = require('./routes/auth')
const postsRoute = require('./routes/posts')

// Lookup environment variables
env.config()

// Connect to db
dbHandler.connectdb(mongoose)

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

// Middlewears
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Route Middlewears
app.use('/api/user', authRoute)
app.use('/api/posts', postsRoute)

app.listen(port, () => console.log(`Server running ${port}`))
