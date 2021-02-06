module.exports = app => {
  const user = require("../controllers/user.controller.js");

  app.get("/AllUser", user.AllUser);
  app.post("/UserForEmail", user.UserForEmail);
}
