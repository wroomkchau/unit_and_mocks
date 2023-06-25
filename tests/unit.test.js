// const axios = require('axios').default
const UserDataHandler = require('../src/data_handlers/user_data_handler')
const handler = new UserDataHandler()
jest.setTimeout(40 * 1000)

test(`Verify that get request returns list of users`, async () => {
  const users = await handler.loadUsers();
  console.log(users);
  await expect(users.length).toBe(10);
})

// test(`Verification of the UI of the logged user`, async () => {
//   await loginPage.submitLoginWithParameters(`superadmin`, `erebus`)
//   await homePage.waitFor(homePage.UserBlock)
// })