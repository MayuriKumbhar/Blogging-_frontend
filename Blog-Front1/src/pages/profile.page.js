import Navbar from './../components/navbar.component';
import { getProfile } from './../services/user.service';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = (props) => {

  const [user, setUser] = useState([])

  useEffect(() => {
    getUserProfile()
  },[])

  const navigate = useNavigate()

  const onUpdateUser = async () => {
    sessionStorage['uid'] = user.id
    navigate('/update')
  }

  

  const getUserProfile = async () => {
    const result = await getProfile()
    if(result) {
      console.log(result)
    }
    setUser(result)
  }
    return (
      <div>
        <Navbar />
        <h1 className="header">Profile</h1>
        <div 
          className="card"
          style={{
              width: '25%',
              display: 'inline-block',
             marginLeft: '520px',
             marginTop: '20px',
              height: '350px',
              paddingLeft: '20px',
              paddingRight: '20px',
          }}
        >
        <table className="table">
                <tr>
                  <td><p className='tablename'><strong>First Name:</strong></p></td>
                  <td><p className='tablename'>{user.firstname}</p></td>
                </tr>
                <tr>
                  <td><p className='tablename'><strong>Last Name:</strong></p></td>
                  <td><p className='tablename'>{user.lastname}</p></td>
                </tr>
                <tr>
                  <td><p className='tablename'><strong>Email Id:</strong></p></td>
                  <td><p className='tablename'>{user.email}</p></td>
                </tr>
                <tr>
                  <td><p className='tablename'><strong>City:</strong></p></td>
                  <td><p className='tablename'>{user.city}</p></td>
                </tr>
                <tr>
                  <td><p className='tablename'><strong>Country:</strong></p></td>
                  <td><p className='tablename'>{user.country}</p></td>
                </tr>
                <tr>
                  <td><p className='tablename'><strong>Gender:</strong></p></td>
                  <td><p className='tablename'>{user.gender}</p></td>
                </tr>
            
        </table>
        <button style={{marginLeft: '100px'}} type="button" class="btn btn-warning" onClick={onUpdateUser}>Update</button>
      </div>
      </div>
    )
  }
  
  export default ProfilePage