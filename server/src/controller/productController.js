import productService from "../services/productService";

let handleGetAllProducts = async (req, res) => {
  let pd_id = req.query.pd_id; //All or one product
  if (!pd_id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameter",
      products: [],
    });
  }
  let products = await productService.getAllProducts(pd_id);
  return res.status(200).json({
    errCode: 0,
    errMessage: "OK",
    products,
  });
};

let handleCreateNewProduct = async (req, res) => {
  let message = await productService.createNewProduct(req.body);
  return res.status(200).json(message);
};
let handleEditProduct = async (req, res) => {
    let data = req.body;
    let message = await productService.updateProductData(data);
    return res.status(200).json(message);
  };
  
let handleDeleteProduct = async (req, res) => {
  if (!req.body.pd_id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters!",
    });
  }
  let message = await productService.deleteProduct(req.body.pd_id);
  return res.status(200).json(message);
};

module.exports = {
  handleGetAllProducts: handleGetAllProducts,
  handleCreateNewProduct: handleCreateNewProduct,
  handleEditProduct: handleEditProduct,
  handleDeleteProduct: handleDeleteProduct,
};
