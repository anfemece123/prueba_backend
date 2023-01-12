/* eslint-disable arrow-body-style */
const jwt = require("jsonwebtoken");

const generateJWT = async (data: any, expire = "4h") => {
  const secret = "anfemece123";
  return new Promise((resolve, reject) => {
    const payload = data;
    jwt.sign(
      payload,
      secret,
      {
        expiresIn: expire,
      },
      (err: any, token: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

const verifyJwt = async (token: any) => {
  try {
    const secret = "anfemece123";
    const result = jwt.verify(token, secret);
    return result;
  } catch (error) {
    throw Error("Error el token no es valido");
  }
};

module.exports = { generateJWT, verifyJwt };
