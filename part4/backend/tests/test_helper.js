const listHelper = require('../utils/list_helper')
const Blog = require('../models/blog')

  const initialBlogs = [
    {
      
      title: 'Get Rich',
      author: 'Sarah Mansfield',
      url: 'http://www.Richers.html',
      likes: 10,
      id: '5a422aa71b54a676234437f8'
    },
    {
      
      title: 'All in',
      author: 'Alain Brandy',
      url: 'http://www.GetItRight.html',
      likes: 3,
      id: '5a422aa71b54a67623sw17f8'
    },
    {
      
      title: 'How I changed my Body',
      author: 'Alain Brandy',
      url: 'http://www.GetItRight.html',
      likes: 2,
      id: '5a422aa71b54a67623sw17f7'
    }
  ]

  const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
  }

  test('total amount of likes in all the blog posts', () => {
    const result = listHelper.totalLikes(list)
    expect(result).toBe(20)
  })

  test('the favourite blog of all the blog posts (with the most likes)', () => {
    const result = listHelper.favoriteBlog(list)
    expect(result).toEqual({title: 'Get Rich',
    author: 'Sarah Mansfield', likes: 10})
  })

  test('the author with the most blogs published', () => {
    const result = listHelper.mostBlogs(list)
    expect(result).toEqual({ author : 'Alain Brandy', blogs : 2})
  })

  test('the author with the most likes over all blogs', () => {
    const result = listHelper.mostLikes(list)
    expect(result).toEqual({author : 'Sarah Mansfield', likes : 10})
  })

module.exports = { initialBlogs, blogsInDb }
