import axios from 'axios';
import { setting } from './../config';

export const getBlogs = async (tag = '') => {
  const url = setting.server + `/blog?tag=${tag}`
  const token = sessionStorage['token']
  let response
  try {
    response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    response = response.data
  } catch (ex) {
    console.log(ex)
  }

  return response
}

export const createBlog = async (title, content, tag) => {
  const url = setting.server + '/blog/'
  const token = sessionStorage['token']
  let response
  try {
    response = await axios.post(
      url,
      {
        title,
        content,
        tag,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    response = response.data
  } catch (ex) {
    console.log(ex)
  }

  return response
}


  export const deleteBlogs = async (id = '') => {
    const url = setting.server + `/blog/${id}`
    const token = sessionStorage['token']
    let response
    try {
      response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
  
      response = response.data
    } catch (ex) {
      console.log(ex)
    }
  
    return response
  }

  export const updateBlogs = async (id, title, content, tag) => {
    const url = setting.server + `/blog/${id}`
    const token = sessionStorage['token']
    let response
    try {
      response = await axios.post(
        url,
        {
          title,
          content,
          tag,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
  
      response = response.data
    } catch (ex) {
      console.log(ex)
    }
  
    return response
  }