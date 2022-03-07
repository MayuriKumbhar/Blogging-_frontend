import { useNavigate } from 'react-router-dom';

const Blog = (props) => {
    const { id, title, content, tag, changeTag, deleteBlog, updateBlog} = props
    const navigate = useNavigate()


    const onDeleteBlog = () => {
        deleteBlog(id)
    }

    const onButtonUpdate = () => {
        sessionStorage['id'] = id
        navigate('/updateBlog')
    }
    
    return (
        <div 
          className="card"
          style={{
              width: '75%',
              display: 'inline-block',
              margin: '10px',
              height: '250px',
          }}
        >
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                
                <button style={{float: 'right',marginLeft:'10px'}} onClick={onButtonUpdate} className="btn btn-outline-primary">Update</button>
                <button style={{float: 'right',marginLeft:'10px'}} onClick={onDeleteBlog} className="btn btn-danger">Delete</button>
                
            </div>
        </div>
    )
    
}

export default Blog