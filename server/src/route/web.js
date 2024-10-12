import express from "express";
import productController from "../controller/productController";
import userController from "../controller/userController";

let router = express.Router();

let initWebRouters = (app) => {
  //user router

  //product router
  router.get("/getAllProducts", productController.getProducts);
  router.get("/get-display-create-new-product", productController.getDisplayCreateNewProduct);
  return app.use("/", router);
};

module.exports = initWebRouters;
