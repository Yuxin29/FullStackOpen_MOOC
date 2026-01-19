// app.js
const express = require('express')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')

const app = express()

// 连接数据库
const mongoUrl = 'mongodb://localhost/bloglist'
mongoose.connect(mongoUrl, { family: 4 })
  .then(() => console.log('connected to MongoDB'))
  .catch((error) => console.log('error connecting to MongoDB:', error.message))

app.use(express.json())

// 路由
app.use('/api/blogs', blogsRouter)

// 根路由测试
app.get('/', (req, res) => {
  res.send('Bloglist API is running!')
})

module.exports = app
