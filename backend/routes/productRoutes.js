const express = require('express');
const router = express.Router();


const {
  getAllProducts,
  getProductNames,
  getProductIds,
  getSingleProduct,
  createProduct,
  updateProduct,
} = require('../controllers/productController');



router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/names', getProductNames);
router.get('/ids', getProductIds);
router.get('/:id', getSingleProduct);
router.put('/:id', updateProduct);


module.exports = router;
