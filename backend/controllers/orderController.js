const Order = require('../models/Order');

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'name')
      .populate('product', 'name');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrderIds = async (req, res) => {
  try {
    const ids = await Order.find({}, '_id');
    res.status(200).json(ids);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name')
      .populate('product', 'name');
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllOrders,
  getOrderIds,
  getSingleOrder,
};
