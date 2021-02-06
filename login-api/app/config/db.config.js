module.exports = {
  HOST: "localhost",
  USER: "insinvestuser",
  PASSWORD: "Pass@123",
  DB: "insinvest",
  dialect: "mysql",
  port: 3307,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
