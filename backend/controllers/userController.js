const User = require('../models/User');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserNames = async (req, res) => {
  try {
    const names = await User.find({}, 'name');
    res.status(200).json(names);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserIds = async (req, res) => {
  try {
    const ids = await User.find({}, '_id');
    res.status(200).json(ids);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserNames,
  getUserIds,
  getSingleUser,
};
