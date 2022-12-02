import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(401).json({ data: { string: "Unauthorized, no token found" } });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, userId) => {
    if (err) {
      return res.status(403).json({ data: { string: "Unauthorized, invalid token" } });
    }
    req.userId = {
      id: userId,
    };
    next();
  });
};
