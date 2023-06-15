const _ = require('lodash')

const totalLikes = (blogs) => {
    const total = blogs.reduce((sum, blog) => {
            console.log(sum)
        return sum + blog.likes
    },0)

    return total
    }

const favoriteBlog = (blogs) => {
    const favorite = blogs.reduce((max, blog) => max.likes > blog.likes ? max : blog, blogs[0])
    const favorite_outline = {
        title : favorite.title,
        author : favorite.author,
        likes: favorite.likes
    }

    return favorite_outline
    }

const mostBlogs = (blogs) => {
        const countByAuthor = _.countBy(blogs, 'author')
        const authorBlogPairs = _.toPairs(countByAuthor)
        const maxPair = _.maxBy(authorBlogPairs, pair => pair[1])
        return maxPair ? {author : maxPair[0], blogs : maxPair[1]} : null
}

const mostLikes = (blogs) => {
    const groupByAuthor = _.groupBy(blogs, 'author')
    const likesByAuthor = _.mapValues(groupByAuthor, blogs => _.sumBy(blogs, 'likes'))
    const authorLikesPairs = _.toPairs(likesByAuthor)
    const maxPair = _.maxBy(authorLikesPairs, pair => pair[1])
    return maxPair ? {author : maxPair[0], likes : maxPair[1]} : null
}
  
  module.exports = {
    totalLikes, favoriteBlog, mostBlogs, mostLikes
  }