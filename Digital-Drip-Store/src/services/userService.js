// \src\services\userService.js
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const getUserById = async (id) => {
  return User.findByPk(id, {
    attributes: ['id', 'firstname', 'surname', 'email'],
  });
};

const createUser = async (data) => {
  const { firstname, surname, email, password } = data;

  const hashedPassword = await bcrypt.hash(password, 10);

  return User.create({
    firstname,
    surname,
    email,
    password: hashedPassword,
  });
};

const updateUser = async (id, data) => {
  const [updated] = await User.update(data, { where: { id } });
  return updated;
};

const deleteUser = async (id) => {
  const deleted = await User.destroy({ where: { id } });
  return deleted;
};

module.exports = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
