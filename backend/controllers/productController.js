const Product = require('../models/Product');
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getProductNames = async (req, res) => {
  try {
    const names = await Product.find({}, 'name');
    res.status(200).json(names);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getProductIds = async (req, res) => {
  try {
    const ids = await Product.find({}, '_id');
    res.status(200).json(ids);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



module.exports = {
  getAllProducts,
  getProductNames,
  getProductIds,
  getSingleProduct,
  createProduct, 
};
