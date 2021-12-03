const bcrypt = require("bcrypt");
const { Model } = require("sequelize");
const ADMIN_TYPE = "admin";
const USER_TYPE = "user";

const validatePassword = (user) => {
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(user.password, salt);
};

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    // validatePassword(password) {
    //   return bcrypt.compare(password, this.password);
    // }

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  const props = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type: DataTypes.STRING,
  };
  const options = {
    sequelize,
    modelName: "User",
    hooks: {
      beforeCreate(user) {
        return validatePassword(user);
      },
      beforeUpdate(user) {
        return validatePassword(user);
      },
    },
  };

  User.init(props, options);

  return User;
};
