const BlogForm = (props) => {
    return (
      <form onSubmit={props.submit}>
          <div>
            title: <input value = {props.title} onChange={props.handleTitleChange} />
          </div>
          <div>
            author: <input value = {props.author} onChange={props.handleAuthorChange} />
          </div>
          <div>
            url: <input value = {props.url} onChange={props.handleURLChange} />
          </div>
          <div>
            likes: <input value = {props.likes} onChange={props.handleLikesChange} />
          </div>
          
          <div>
            <button type="submit">add</button>
          </div>
    </form>
    )
    
  }

export default BlogForm