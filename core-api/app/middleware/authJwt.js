const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token && req.headers["authorization"] && req.headers["authorization"].startsWith("Bearer ")) {
        token = req.headers["authorization"].substring(7, req.headers["authorization"].length)
    }

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
        req.user = decoded.user.email;
        next();
    });
};

const authJwt = {
    verifyToken: verifyToken
};
module.exports = authJwt;
