const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Get token from the request header
    const token = req.header('x-auth-token');

    // Check if no token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify with secret key
        req.user = decoded.user; // Attach user info from the token payload
        next(); // Proceed to the next middleware/route handler
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};
