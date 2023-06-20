const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
require('express-async-errors')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
  })
  
blogsRouter.post('/', async (request, response) => {
  const blog = new Blog(request.body)
  
    const savedBlog = await blog.save()
    response.status(201).json(savedBlog)
  })

blogsRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

blogsRouter.put('/:id', async (request, response) => {
  const body = request.body

  const newBlog = {
    title : body.title,
    url : body.url,
    likes : body.likes,
    author: body.author
  }

  const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, newBlog, { new: true })
  response.status(200).json(updatedBlog.toJSON())
})

module.exports = blogsRouter