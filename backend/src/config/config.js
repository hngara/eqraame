require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5000,
  HOST: process.env.HOST || "127.0.0.1",
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
};
