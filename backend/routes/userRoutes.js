const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserNames,
  getUserIds,
  getSingleUser
} = require('../controllers/userController');

router.get('/', getAllUsers);
router.get('/names', getUserNames);
router.get('/ids', getUserIds);
router.get('/:id', getSingleUser);

module.exports = router;
