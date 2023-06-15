const listHelper = require('../utils/list_helper')

describe('likes', () => {
  const list = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234437f8',
      title: 'Get Rich',
      author: 'Sarah Mansfield',
      url: 'http://www.Richers.html',
      likes: 10,
      __v: 0
    },
    {
      _id: '5a422aa71b54a67623sw17f8',
      title: 'All in',
      author: 'Alain Brandy',
      url: 'http://www.GetItRight.html',
      likes: 3,
      __v: 0
    },
    {
      _id: '5a422aa71b54a67623sw17f7',
      title: 'How I changed my Body',
      author: 'Alain Brandy',
      url: 'http://www.GetItRight.html',
      likes: 2,
      __v: 0
    }
  ]

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
})