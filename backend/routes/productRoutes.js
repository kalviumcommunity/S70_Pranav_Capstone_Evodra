const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductNames,
  getProductIds,
  getSingleProduct
} = require('../controllers/productController');

router.get('/', getAllProducts);
router.get('/names', getProductNames);
router.get('/ids', getProductIds);
router.get('/:id', getSingleProduct);

module.exports = router;
