const Blogs = (props) => {
    const blogs = props.blogs
    return(
        <div>
            {blogs.map((blog) => {
                return <div className="posts" key={blog.title}> 
                <p>Title: {blog.title}</p>
                <p>Author: {blog.author}</p>
                <p>URL: {blog.url}</p> 
                <p>Likes :{blog.likes}</p>
                </div>
            })}
        </div>
        
    )
}

export default Blogs