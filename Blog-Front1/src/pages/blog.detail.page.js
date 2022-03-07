import { useEffect, useState } from 'react';
import { getBlogs } from './../services/blog.service';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar.component';
import AllBlog from './../components/blogAll.component';

const BlogDetailPage = (props) => {

  const [blogSports, setBlogSports] = useState([])
  const [blogNews, setBlogNews] = useState([])
  const [blogFashion, setBlogFashion] = useState([])
  const [blogEntertainment, setBlogEntertainment] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    reloadBlogs()
  }, [])

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

    return (
      <div>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className="col">
              {blogSports.length > 0 && 
              blogSports.map((blog) => {
                const {id, title, tag, content} = blog
                return (
                  <AllBlog
                  key = {id}
                  id = {id}
                  title = {title}
                  content = {content}
                  tag = {tag}
                   />
                )
              })}
              {blogSports.length === 0 && <div>No Sports related blogs</div>}
            </div>
           
              <div className="col">
                
                {blogNews.length > 0 && 
                blogNews.map((blog) => {
                  const {id, title, tag, content} = blog
                  return (
                    <AllBlog 
                    key = {id}
                    id = {id}
                    title = {title}
                    content = {content}
                    tag = {tag}
                    
                    />
                  )
                })}
                {blogNews.length === 0 && <div>No News related blogs</div>}
              </div>
        </div>

        <div className='row'>
            <div className="col">
              
              {blogFashion.length > 0 && 
              blogFashion.map((blog) => {
                const {id, title, tag, content} = blog
                return (
                  <AllBlog 
                  key = {id}
                  id = {id}
                  title = {title}
                  content = {content}
                  tag = {tag}
                  
                   />
                )
              })}
              {blogFashion.length === 0 && <div>No Fashion related blogs</div>}
            </div>
           
              <div className="col">
                
                {blogEntertainment.length > 0 && 
                blogEntertainment.map((blog) => {
                  const {id, title, tag, content} = blog
                  return (
                    <AllBlog 
                    key = {id}
                    id = {id}
                    title = {title}
                    content = {content}
                    tag = {tag}
                    
                    />
                  )
                })}
                {blogEntertainment.length === 0 && <div>No Entertainment related blogs</div>}
              </div>
        </div>
        
      </div>
      </div>
    )
  }
  
  export default BlogDetailPage