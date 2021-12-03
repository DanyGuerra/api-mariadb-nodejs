const { DataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  const modelName = "Product";
  const props = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    prize: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  };

  const options = {
    tableName: "products",
    timestamps: true, //createdAt, updateAt
  };

  const Product = sequelize.define(modelName, props, options);

  // relations
  // User.associate = function (models) {
  //   User.hasMany(models.Tasks, {
  //     as: "tasks",
  //     foreignKey: "id_user",
  //   });
  // };

  return Product;
};
