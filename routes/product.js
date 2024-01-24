const express = require("express");
const productController = require("../controller/product");
const router = express.Router();

router
  .post("/", productController.createProduct)
  .get("/", productController.gettAllProducts)
  .get("/:id", productController.getProduct)
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateproduct)
  .delete("/:id", productController.deleteProduct);

  exports.router=router;