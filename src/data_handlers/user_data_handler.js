const axios = require('axios').default

class UserDataHanlder {
  constructor () {
    this.users = []
  }

  async loadUsers () {
    const response = await axios.get('https://locahost:3000').catch(err => {
      throw new Error(`Failed to load users data: ${err}`)
    })
    this.users = response.data
  }

  getUserEmailsList () {
    const arrayOfEmails = this.users.map(user => user.email)
    const listOfUSerEmails = arrayOfEmails.join(';')
    return listOfUSerEmails
  }
}

module.exports = UserDataHanlder
