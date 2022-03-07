import { useNavigate } from 'react-router-dom';

const AllBlog = (props) => {
    const { id, title, content, tag} = props



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

            </div>
        </div>
    )
    
}

export default AllBlog