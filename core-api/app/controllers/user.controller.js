const User = require("../models/user.model")
// Create and Save a new Enquiry
exports.AllUser = async function (req, res) {

  const result = await User.GetAll();
  const data = result.reduce((result, current) => {
    const item = result.find(s => s.email === current.email)
    if (item) {
      item.roles.push(current.name);
    }
    else {
      result.push({
        email: current.email,
        id: current.id,
        roles: [current.name]
      })
    }
    return result;
  }, []);

  res.send({ data });
};

// Create and Save a new Enquiry
exports.UserForEmail = async function (req, res) {

  let result = await User.GetAll();
  result = result.filter(s => s.email === req.body.email);
  const data = result.reduce((result, current) => {
    const item = result.find(s => s.email === current.email)
    if (item) {
      item.roles.push(current.name);
    }
    else {
      result.push({
        email: current.email,
        id: current.id,
        roles: [current.name]
      })
    }
    return result;
  }, []);

  res.send({ data });
};