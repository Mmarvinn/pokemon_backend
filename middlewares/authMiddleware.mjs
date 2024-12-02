import jwt from 'jsonwebtoken';
import User from '../model/userModel.mjs';

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeaders = req.headers.authorization;

    if (!authHeaders) {
      return res
        .status(401)
        .json({ error: 'Authorization token is missing or invalid' });
    }

    const token = authHeaders.split(' ')[1];

    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const currentUser = await User.findById(decodedToken.userId);

      if (!currentUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      req.user = currentUser;

      next();
    } catch (err) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
