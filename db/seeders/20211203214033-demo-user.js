"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
      {
        id: 1,
        username: "danyguerra",
        name: "dany",
        lastname: "Ramirez",
        email: "iramirez@example.com",
        password: "estaes",
        type: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    const options = {};

    await queryInterface.bulkInsert("Users", users, options);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
