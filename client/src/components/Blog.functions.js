import axios from 'axios'

export const getBlog = () => {
    return axios
    .get('api/Blog', {
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        return response.data
    })
}
export const addToBlog = newPost => {
    return axios
      .post(
        '/api/Blog',
        {
          name: newPost.name,
          lastname: newPost.lastname,
          post_bio: newPost.post_bio
        },
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )
      .then(response => {
        console.log(response)
      })
  }