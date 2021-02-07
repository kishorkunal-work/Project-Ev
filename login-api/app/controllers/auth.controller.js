const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    mobile: req.body.mobile,
    company: req.body.company,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User registered successfully!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User registered successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }



      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push(roles[i].name.toUpperCase());
        }

        var token = jwt.sign({ id: user.id, user: { name: user.firstname + " " + user.lastname, email: user.email, roles: authorities, company: user.company } }, config.secret, {
          expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
          id: user.id,
          email: user.email,
          accessToken: token
        });
      });



    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.changepassword = async function (req, res) {
  // Save User to Database
  let oldpassword = req.body.oldpassword
  let newpassword = req.body.newpassword
  let email = req.body.email

  var user = await User.findOne({ where: { email: email } });

  var passwordMatch = bcrypt.compareSync(oldpassword, user.password);

  if (passwordMatch) {
    var result = await User.update(
      { password: bcrypt.hashSync(newpassword, 8) },
      { where: { email: email } }
    )
    res.send({ success: true, message: "User password changed successfully." });
    console.log(result);
  }
  else {
    res.send({ success: false, message: "User old password didn't match" });
  }
};

exports.resetpassword = async function (req, res) {
  // Save User to Database
  let newpassword = "Pass@123"
  let email = req.body.email

  var result = await User.update(
    { password: bcrypt.hashSync(newpassword, 8) },
    { where: { email: email } }
  )
  res.send({ success: true, message: "User password reset successfully. Please change password!!" });
  console.log(result);
}
