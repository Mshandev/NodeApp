const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;

//Rest API Functions
exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  //  product.title='phone 9';
  //  product.price=1111;
  //  product.rating=4.5;
  try {
    const doc = await product.save();
    res.status(201).json(doc);
  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
};
exports.gettAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json(products);
  } catch(err)  {
    console.log(err);
    res.status(400).json(err);
  }
};
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findById(id);
    res.status(201).json(doc);
  } catch(err)  {
    console.log(err);
    res.status(400).json(err);
  }
};
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch(err)  {
    console.log(err);
    res.status(400).json(err);
  }
};
exports.updateproduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
};
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
};
