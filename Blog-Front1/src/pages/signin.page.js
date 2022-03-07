import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../services/user.service'

const SigninPage = (props) => {
  // state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const onSignin = async () => {
    if (email.length === 0) {
      alert('set email')
    } else if (password.length === 0) {
      alert('set password')
    } else {
      const result = await signin(email, password)
      if (result) {
        const { token } = result

        // localStorage
        // sessionStorage
        sessionStorage['token'] = token
        sessionStorage['username'] = email

        // redirect to task list
        navigate('/blog-details')
      } else {
        alert('invalid email or password')
      }
    }
  }

  return (
    <div className='container'>
      <h1 className="header">Signin</h1>
      <div className="form">
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="text"
            class="form-control"
          />{' '}
        </div>

        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            class="form-control"
          />
        </div>

        <div class="mb-3">
          <div>
            Don't have an account ? Signup <Link to="/signup">here</Link>
          </div>
          <button onClick={onSignin} className="btn btn-success">
            Signin
          </button>
        </div>
      </div>
    </div>
  )
}

export default SigninPage
