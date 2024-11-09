import express from "express";
import productController from "../controller/productController";
import userController from "../controller/userController";
import cartController from "../controller/cartController";
import orderController from "../controller/orderController";
let router = express.Router();

let initWebRouters = (app) => {
  router.post("/register", userController.handleRegister);
  router.post("/login", userController.handleLogin);
  router.post("/forgot-password", userController.handleForgotPassword);
  router.post("/change-password", userController.handleChangePassword);
  router.get("/login", userController.getLogin); 
  router.get("/register", userController.getRegister);
  router.get("/admin", (req, res) => {
    res.render("partials/sidebar");
  });


  //Product api
  router.get("/api/get-all-products", productController.handleGetAllProducts);
  router.post(
    "/api/create-new-product",
    productController.handleCreateNewProduct
  );
  router.put("/api/edit-product", productController.handleEditProduct);
  router.delete("/api/delete-product", productController.handleDeleteProduct);
  router.get(
    "/api/get-all-categories",
    productController.handleGetAllCategories
  );
  router.get("/api/get-all-images", productController.handleGetAllImagesById);
  //Cart API
  router.post("/api/add-cart", cartController.handleAddCart);
  router.get("/api/get-cart-by-user-id", cartController.handleGetCartByUserId);
  router.put("/api/update-cart", cartController.handleUpdateCart);
  router.delete("/api/delete-cart", cartController.handleDeleteCart);
  router.delete("/api/clear-cart", cartController.handleClearCart);
  //Order API
  router.post("/api/create-order", orderController.handleCreateOrder); 
  //router.get("/api/get-order", orderController.handleGetOrder); 
  //router.get("/api/get-order-by-user-id", orderController.handleGetOrderByUserId); 
  // router.post("/api/create-order", orderController.handleCreateOrder);
  // router.post("/api/create-order", orderController.handleCreateOrder);
  // router.post("/api/create-order", orderController.handleCreateOrder);
  return app.use("/", router);
};

module.exports = initWebRouters;
