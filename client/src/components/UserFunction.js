import axios from "axios"

export const register = newUser => {
    return axios
    .post('api/UserPost', {
        
        name: newUser.name,
        lastname: newUser.lastname,
        email: newUser.email,
        password: newUser.password
    })
    .then(promise => {
        console.log(promise);
    })
}

export const login = user => {
    return axios
    .post('api/User/', {
        email: user.email,
        password: user.password
    })
    .then(promise => {
        localStorage.setItem('usertoken', promise.data)
        return promise.data
    })
   }