const { getUserById } = require("../controllers/Users");
const User = require("../db/models").User;

const permission = (...allowedRoles) => {
  return async (req, res, next) => {
    try {
      const user = await User.findOne({ where: { id: req.userId } });
      console.log(user);
      if (user && allowedRoles.includes(user.type)) {
        return next(); // if type permission is allowed, so continue the request using the next middleware
      }
      return res.status(403).json({ message: "Usuario no permitido" });
    } catch (err) {
      console.error(err);
    }
  };
};

module.exports = permission;
