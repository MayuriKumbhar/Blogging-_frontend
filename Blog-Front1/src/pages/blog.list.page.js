import Blog from './../components/blog.component';
import { useEffect, useState } from 'react';
import { getBlogs, deleteBlogs, updateBlogs } from './../services/blog.service';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar.component';

const BlogListPage = (props) => {

  const [blogSports, setBlogSports] = useState([])
  const [blogNews, setBlogNews] = useState([])
  const [blogFashion, setBlogFashion] = useState([])
  const [blogEntertainment, setBlogEntertainment] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    reloadBlogs()
  },[])

  const reloadBlogs = () => {
    loadBlog('Sports', setBlogSports)
    loadBlog('News',setBlogNews)
    loadBlog('Fashion', setBlogFashion)
    loadBlog('Entertainment', setBlogEntertainment)
  }

  const loadBlog = async (tag, func) => {
    const result = await getBlogs(tag)
    if(result) {
      console.log(result)
      func(result)
    }
  }

 
  const deleteBlog = async(id) => {
    const result = await deleteBlogs(id)
    console.log('unable to delete')
    if (result) {
      console.log('reloading')
      reloadBlogs()
    }
  }

  const updateBlog = async(id, title ,content, tag) => {
    const result = await updateBlogs(id, title, content, tag)
  
    if (result) {
      console.log('reloading')
      reloadBlogs()
    } else {
      console.log('unable to update blog')
    }
  }

    return (
      <div>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className="col">
              <h4 className="header">Sports Related Blogs</h4>
              {blogSports.length > 0 && 
              blogSports.map((blog) => {
                const {id, title, tag, content} = blog
                return (
                  <Blog 
                  key = {id}
                  id = {id}
                  title = {title}
                  content = {content}
                  tag = {tag}
                  deleteBlog = {deleteBlog}
                  updateBlog = {updateBlog}
                   />
                )
              })}
              {blogSports.length === 0 && <div>No Sports related blogs</div>}
            </div>
           
              <div className="col">
                <h4 className="header">News Related Blogs</h4>
                {blogNews.length > 0 && 
                blogNews.map((blog) => {
                  const {id, title, tag, content} = blog
                  return (
                    <Blog 
                    key = {id}
                    id = {id}
                    title = {title}
                    content = {content}
                    tag = {tag}
                    deleteBlog = {deleteBlog}
                    updateBlog = {updateBlog}
                    />
                  )
                })}
                {blogNews.length === 0 && <div>No News related blogs</div>}
              </div>
        </div>

        <div className='row'>
            <div className="col">
              <h4 className="header">Fashion Related Blogs</h4>
              {blogFashion.length > 0 && 
              blogFashion.map((blog) => {
                const {id, title, tag, content} = blog
                return (
                  <Blog 
                  key = {id}
                  id = {id}
                  title = {title}
                  content = {content}
                  tag = {tag}
                  deleteBlog = {deleteBlog}
                  updateBlog = {updateBlog}
                   />
                )
              })}
              {blogFashion.length === 0 && <div>No Fashion related blogs</div>}
            </div>
           
              <div className="col">
                <h4 className="header">Entertainment Related Blogs</h4>
                {blogEntertainment.length > 0 && 
                blogEntertainment.map((blog) => {
                  const {id, title, tag, content} = blog
                  return (
                    <Blog 
                    key = {id}
                    id = {id}
                    title = {title}
                    content = {content}
                    tag = {tag}
                    deleteBlog = {deleteBlog}
                    updateBlog = {updateBlog}
                    />
                  )
                })}
                {blogEntertainment.length === 0 && <div>No Entertainment related blogs</div>}
              </div>
        </div>
        
              <div className='col'></div>
        </div>
      </div>
      
    )
  }
  
  export default BlogListPage