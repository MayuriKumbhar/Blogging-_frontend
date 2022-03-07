import { updateUser } from "../services/user.service"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UpdateUserPage = (props) => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [gender, setGender] = useState()

  const navigate = useNavigate()

  const onUpdate = async () => {
    if (password.length === 0) {
      alert('please enter password')
    } else if (firstname.length === 0) {
      alert('please enter name')
    } else if (lastname.length === 0) {
      alert('please enter lastname')
    } else if (country.length === 0) {
      alert('please enter country')
    }  else if (city.length === 0) {
      alert('please enter city')
    } else if (email.length === 0) {
      alert('please enter email')
    }  else if (password.length === 0) {
      alert('please enter password')
    } else if (gender.length === 0) {
      alert('please enter gender')
    }else {
      // make the signup API call
      const result = await updateUser(sessionStorage.getItem('uid'), password, firstname, lastname, country, city, email, gender)
      if (result) {
        // go to signin
        navigate('/profile')
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
    <div className="container">
      <h1 className="header">Update Profile</h1>
        <div className="form">

          <div className="mb-3">
            <label className="form-label">First name</label>
            <input
              onChange={(e) => {
                setFirstname(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">last name</label>
            <input
              onChange={(e) => {
                setLastname(e.target.value)
              }}
              type="text"
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
            <label className="form-label">Gender</label>
            <button style={{backgroundColor: 'pink', marginLeft: '10px'}} className="btn" onClick={onButtonFemale}>Female</button>
                        <button style={{backgroundColor: 'pink',marginLeft: '10px'}} className="btn" onClick={onButtonMale}>Male</button>
                        <button style={{backgroundColor: 'pink',marginLeft: '10px'}} className="btn" onClick={onButtonBinary}>Binary</button>
                        <button style={{backgroundColor: 'pink',marginLeft: '10px'}} className="btn" onClick={onButtonNone}>Prefer not to say</button>
          </div>

          <div className="mb-3">
            <button onClick={onUpdate} className="btn btn-success">
              Update
            </button>
          </div>

        </div>
    </div>
  )
}
export default UpdateUserPage