import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar.component'
import { createBlog } from '../services/blog.service'

const BlogCreatePage = (props) => {
  // state
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tag, setTag] = useState()

  const navigate = useNavigate()

  
  const onButtonSports = () => {
    setTag('Sports')
} 
  const onButtonNews = () => {
    setTag('News')
  } 
  const onButtonFashion = () => {
    setTag('Fashion')
  } 
  const onButtonEntertainment = () => {
    setTag('Entertainment')
  } 


  const onCreateBlog = async () => {
    if (title.length === 0) {
      alert('set title')
    } else if (content.length === 0) {
      alert('set content')
    } else if (tag.length === 0) {
      alert('set tag')
    } else {
      const result = await createBlog(title, content, tag)
      if (result) {
        navigate('/blog-details')
      } else {
        alert('invalid')
      }
    }
  }

  return (
    <><Navbar /><div className='container'>
      <h1 className="header">Create Blog</h1>
      <div className="form">
        <div class="mb-3">
          <label class="form-label">Title</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value)
            } }
            type="text"
            class="form-control" />{' '}
        </div>

        <div class="mb-3">
          <label class="form-label">Content:</label>
          <textarea
            onChange={(e) => {
              setContent(e.target.value)
            } }
            rows={5}
            type="text"
            class="form-control"
          ></textarea>
        </div>

        <div class='Box' style={{margin: '30px 0px 0px 220px'}}>
        <button class="buttons" onClick={onButtonSports}>Sports</button>
        <button class="buttons" onClick={onButtonNews}>News</button>
        <button class="buttons" onClick={onButtonFashion}>Fashion</button>
        <button class="buttons" onClick={onButtonEntertainment}>Entertainment</button>
        </div>

        <div class="mb-3">
          <button onClick={onCreateBlog} style={{ marginLeft: '200px', width: '80px'}} className="btn btn-success">
            Save
          </button>
          <Link
            to="/blog-details"
            style={{ marginLeft: '30px', width: '80px' }}
            className="btn btn-danger"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div></>
  )
}

export default BlogCreatePage
