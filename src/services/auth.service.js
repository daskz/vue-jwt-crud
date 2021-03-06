import axios from 'axios'

const API_URL = process.env.VUE_APP_BASE_URL
class AuthService {
  login (user) {
    return axios
      .post(API_URL + '/api/users/auth', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.jwtToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
      })
  }

  logout () {
    localStorage.removeItem('user')
  }
}

export default new AuthService()
