import axios from 'axios'
import { setting } from '../config'

export const signup = async ( firstname, lastname, email ,password, city, country, gender) => {
  const url = setting.server + '/user/signup'

  let result
  try {
    result = await axios.post(url, {
      
      firstname,
      lastname,
      email,
      password,
      city,
      country,
      gender,
    })
    result = result.data
  } catch (ex) {
    result = ex
  }

  return result
}

export const signin = async (email, password) => {
  const url = setting.server + '/user/signin'

  let result
  try {
    result = await axios.post(url, {
      email,
      password,
    })
    result = result.data
  } catch (ex) {
    console.log(ex)
  }

  return result
}

export const getProfile = async() => {
  const url = setting.server + '/user/profile'
  const token = sessionStorage['token']
  let result
  try {
    result = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    result = result.data
  } catch (ex) {
    console.log(ex)
  }

  return result
}


export const updateUser = async(id, password, firstname, lastname, country, city, email ,gender ) => {
  const url = setting.server + `/user/${id}`
  const token = sessionStorage['token']
  let result
  try {
    result = await axios.patch(url, {

      password,
      firstname,
      lastname,
      country,
      city,
      email,
      gender,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    result = result.data
    console.log(result)
  } catch (ex) {
    result = ex
  }

  return result
}