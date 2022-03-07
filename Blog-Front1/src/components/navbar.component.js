import './navbar.component.css'
import { Link, useNavigate } from 'react-router-dom'

function Navbar () {
    const navigate = useNavigate()
    const logout = () => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('email')
        navigate('/signin')
      }
   return (
       <nav className='navbar'>
           <div className='nav-left'>
               <a href='/blog-details' className='name'>Home</a>
               <a href='/blog-create' className='name'>Create</a>
               <a href='/blog-list' className='name'>Blogs</a>
               <a href='/profile' className='name'>Profile</a>
           </div>
           <div className="nav-right">
                <button onClick={logout}
                style={{float: 'right'}}
                className='btn btn-warning'>LogOut</button>
           </div>
       </nav>
   )
}

export default Navbar