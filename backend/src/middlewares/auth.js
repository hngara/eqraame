/**
 * auth middleware
 * @desc middlerware for verify authentication
 * @author Mahmoud Atef
 */

const jwt = require("jsonwebtoken");

module.exports = async function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token)
    return res
      .status(401)
      .json({ errros: [{ msg: "No token , Authentcation denided." }] });

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decode.user;
    next();
  } catch (err) {
    if (err.name === "JsonWebTokenError")
      return res.status(401).json({ msg: "Token is not valid." });

    console.log("error in authntication", `${err.name} : ${err.message}`);
    return res.status(500).json({ msg: "server error" });
  }
};
