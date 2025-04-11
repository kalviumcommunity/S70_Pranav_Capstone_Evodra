const express = require('express');
const router = express.Router();
const {
  getAllOrders,
  getOrderIds,
  getSingleOrder,
  createOrder,
  updateOrder
} = require('../controllers/orderController');

// GET routes
router.get('/', getAllOrders);
router.get('/ids', getOrderIds);
router.get('/:id', getSingleOrder);

// POST and PUT routes
router.post('/', createOrder);
router.put('/:id', updateOrder);

module.exports = router;
