const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserNames,
  getUserIds,
  getSingleUser,
  createUser,
  updateUser,
} = require('../controllers/userController');

router.get('/', getAllUsers);
router.get('/names', getUserNames);
router.get('/ids', getUserIds);
router.get('/:id', getSingleUser);
router.post('/', createUser);
router.put('/:id', updateUser);


module.exports = router;
