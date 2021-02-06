const sql = require("./db.js");
const axios = require('axios')

// constructor
const User = function () { };

User.findByEmail = async function (email) {
  let result;
  try {
    result = await sql.query(`SELECT * FROM users WHERE email = '${email}'`);
  } catch (err) {
    //TODO: handle error
  }
  return result ? result[0][0] : result;
};

User.GetAll = async function () {
  let result;
  try {
    result = await sql.query(`
    select u.email , u.id , r.name from users u 
    join user_roles ur on ur.userId = u.id
    join roles r on ur.roleId = r.id;
    `);

  } catch (err) {
    //TODO: handle error
  }
  return result ? result[0] : result;
};

User.signup = async function (email, password, role) {
  return new Promise((resolve, reject) => {

    var body = {
      username: email,
      roles: [role],
      email: email,
      password: password
    };

    axios
      .post('http://localhost:8080/api/auth/signup', body)
      .then(res => {
        console.log(`statusCode: ${res.statusCode}`)
        console.log(res)
        resolve(res)
      })
      .catch(error => {
        console.error(error)
        reject(error);
      })
  });
}

module.exports = User;
