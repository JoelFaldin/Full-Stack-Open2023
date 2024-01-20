const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
// Currently using mongoose@7.6.5
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const blogRouter = require('./controllers/blogRoutes')

const mongoURL = config.MONGODB_URI
mongoose.set('strictQuery', false)
// console.log(mongoURL)
mongoose.connect(mongoURL)
    .then(() => {
        logger.data('DataBase conected! 🛸')
    })
    .catch(error => {
        logger.problem('DataBase refused to connect. ', error.message)
    })

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogRouter)

module.exports = app