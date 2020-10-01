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
    if (!this.users) throw new Error('No users loaded')
    const arrayOfEmails = this.users.map(user => user.email)
    const listOfUSerEmails = arrayOfEmails.join(';')
    return listOfUSerEmails
  }

  getNumberOfUsers () {
    return this.users.length
  }

  findUsers (searchParamsObject) {
  }
}

module.exports = UserDataHanlder
