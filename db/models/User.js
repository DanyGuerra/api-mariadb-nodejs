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
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM(["admin", "user"]),
      allowNull: false,
      defaultValue: USER_TYPE,
    },
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
