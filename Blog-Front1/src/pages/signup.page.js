import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../services/user.service'

const SignupPage = (props) => {

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [gender, setGender] = useState()

  const navigate = useNavigate()

  const onSignup = async () => {
   
    if (firstname.length === 0) {
      alert('please enter name')
    } else if (lastname.length === 0) {
      alert('please enter lastname')
    } else if (email.length === 0) {
      alert('please enter email')
    }  else if (password.length === 0) {
      alert('please enter password')
    } else if (city.length === 0) {
      alert('please enter city')
    } else if (country.length === 0) {
      alert('please enter country')
    }  else if (gender.length === 0) {
      alert('please enter gender')
    }else {
      // make the signup API call
      const result = await signup(firstname, lastname, email, password, city, country, gender)
      if (result) {
        // go to signin
        navigate('/signin')
      }
    }
  } 

  const onButtonFemale = async() => {
    setGender('female')
  }

  const onButtonMale = async() => {
    setGender('male')
  }

  const onButtonBinary = async() => {
    setGender('binary')
  }

  const onButtonNone = async() => {
    setGender('none')
  }
  

    return (
      <div className='container'>
        <h1 className="header">Signup</h1>
        <div className="form">
          

          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              onChange={(e) => {
                setFirstname(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              onChange={(e) => {
                setLastname(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              type="password"
              className="form-control"
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              onChange={(e) => {
                setCity(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Country</label>
            <input
              onChange={(e) => {
                setCountry(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
                        <button style={{backgroundColor: 'pink', marginLeft: '10px'}} className="btn" onClick={onButtonFemale}>Female</button>
                        <button style={{backgroundColor: 'pink',marginLeft: '10px'}} className="btn" onClick={onButtonMale}>Male</button>
                        <button style={{backgroundColor: 'pink',marginLeft: '10px'}} className="btn" onClick={onButtonBinary}>Binary</button>
                        <button style={{backgroundColor: 'pink',marginLeft: '10px'}} className="btn" onClick={onButtonNone}>Prefer not to say</button>
          </div>

          <div className="mb-3">
            <div>
              Already have an account ? Signin <Link to="/signin">here</Link>
            </div>
            <button onClick={onSignup} className="btn btn-success">
              Signup
            </button>
          </div>

        </div>
      </div>
    )
  }
  
  export default SignupPage