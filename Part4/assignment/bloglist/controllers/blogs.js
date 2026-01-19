// controllers/blogs.js
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

// GET /api/blogs
blogsRouter.get('/', async (req, res) => {
  const blogs = await Blog.find({})
  res.json(blogs)
})

// POST /api/blogs
blogsRouter.post('/', async (req, res) => {
  const blog = new Blog(req.body)
  const savedBlog = await blog.save()
  res.status(201).json(savedBlog)
})

module.exports = blogsRouter
