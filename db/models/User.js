const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  const modelName = "User";
  const props = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  };

  const options = {
    tableName: "users",
    timestamps: true, //createdAt, updateAt
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      },
    },
  };

  const User = sequelize.define(modelName, props, options);

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  // relations
  // User.associate = function (models) {
  //   User.hasMany(models.Tasks, {
  //     as: "tasks",
  //     foreignKey: "id_user",
  //   });
  // };

  return User;
};
