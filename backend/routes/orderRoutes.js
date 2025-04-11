const express = require('express');
const router = express.Router();
const {
  getAllOrders,
  getOrderIds,
  getSingleOrder,
  createOrder,
  updateOrder
} = require('../controllers/orderController');

router.get('/', getAllOrders);
router.get('/ids', getOrderIds);
router.get('/:id', getSingleOrder);

router.get('/', createOrder);
router.put('/', updateOrder);

module.exports = router;
