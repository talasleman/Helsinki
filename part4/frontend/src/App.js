import blogService from './services/blog'
import {useState, useEffect} from 'react'
import Blogs from './Blogs'
import BlogForm from './BlogForm'

const App = () => {

  const [blogs, setBlogs] = useState([])
  const [newTitle, setTitle] = useState('')
  const [newAuthor, setAuthor] = useState('')
  const [newURL, setURL] = useState('')
  const [newLikes, setLikes] = useState('')
  
  useEffect(() => {
    blogService.getAll().then(
      response => {
        console.log('promise fulfilled')
        setBlogs(response.data)
      }
    ).catch(error => console.log(error)) 
  }, [])

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleURLChange = (event) => {
    setURL(event.target.value)
  }

  const handleLikesChange = (event) => {
    setLikes(event.target.value)
  }

  const addBlog = () => {

    const blogObject = {
      title: newTitle,
      author: newAuthor,
      url: newURL,
      likes: newLikes
    }
    blogService.create(blogObject).then(
      response => {
        setBlogs(blogs.concat(response.data))
        console.log('Blog added')
        setAuthor('')
        setLikes('')
        setURL('')
        setTitle('')
      }
    )
  }

  return (
    <div>
      <h1>Blog</h1>
      <h2>Add a post</h2>
      <BlogForm submit = {addBlog} title = {newTitle} handleTitleChange ={handleTitleChange}
      author = {newAuthor} handleAuthorChange ={handleAuthorChange}
      url = {newURL} handleURLChange ={handleURLChange}
      likes = {newLikes} handleLikesChange ={handleLikesChange}></BlogForm>
      <h2>All posts</h2>
      <Blogs blogs = {blogs}></Blogs>
      
   
  </div>
    
  )
}

export default App