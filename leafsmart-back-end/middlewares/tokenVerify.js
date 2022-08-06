const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const verifyToken = (req, res, next) => {
  // if auth doesn't exist return error
  if (!req.headers['authorization']) {
    return res.status(400).send({ message: 'You are not logged in' });
  }
  const token = req.headers['authorization'].split(' ')[1];

  if (!token) {
    return res.status(400).send({ message: 'Authorization token does not exist' });
  }
  // To decode and validate a token we use the verify(token, secret) method
  jwt.verify(token, SECRET, (err, decoded) => {
    // If there is an error during the verification of the token, we return with an error message
    if (err) {
      return res
        .status(400)
        .send({ message: 'Invalid Authorization Token' });
    }
    // In case the decoding of the token is valid, we assign that value to the object req.token
    req.token = decoded;
    next();
  });
};

module.exports = verifyToken;