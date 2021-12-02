const User = require("../db/models").User;

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send({ users });
  } catch (err) {}
};

const createUser = async (req, res) => {
  try {
    const body = req.body;
    const user = await User.create(body);
    res.status(201).send({ user });
  } catch (err) {
    res.status(400).send("Bad request");
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ where: { id: id } });
    res.send({ user });
  } catch (err) {
    res.status(400).send("Bad request");
  }
};

const putUserById = async (req, res) => {
  const id = req.params.id;
  try {
    await User.update({ email: req.body.email }, { where: { id: id } });
    res.status(202).send("User Updated");
  } catch (err) {
    res.status(400).send("Bad request");
  }
};

const deleteUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.destroy({ where: { id: id } });
    if (user) {
      res.send("User deleted");
    } else {
      res.send(400).send("User Not Found");
    }
  } catch (err) {
    res.status(400).send("Bad request");
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  deleteUserById,
  putUserById,
};
