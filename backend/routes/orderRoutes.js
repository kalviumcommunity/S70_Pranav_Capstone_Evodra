const express = require('express');
const router = express.Router();
const {
  getAllOrders,
  getOrderIds,
  getSingleOrder
} = require('../controllers/orderController');

router.get('/', getAllOrders);
router.get('/ids', getOrderIds);
router.get('/:id', getSingleOrder);

module.exports = router;
