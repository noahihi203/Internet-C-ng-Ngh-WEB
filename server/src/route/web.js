import express from "express";
import productController from "../controller/productController";
import userController from "../controller/userController";

let router = express.Router();

let initWebRouters = (app) => {

  router.post("/register", userController.handleRegister);
  router.post("/login", userController.handleLogin);
  router.post('/forgot-password', userController.handleForgotPassword);
  router.post('/change-password', userController.handleChangePassword);

  router.get("/api/get-all-products", productController.handleGetAllProducts);
  router.post("/api/create-new-product", productController.handleCreateNewProduct);
  router.put("/api/edit-product", productController.handleEditProduct);
  router.delete("/api/delete-product", productController.handleDeleteProduct)

  return app.use("/", router);
};

module.exports = initWebRouters;
