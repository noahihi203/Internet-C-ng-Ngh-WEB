import productService from "../services/productService";

let getProducts = async(req, res) => {
    let data = await productService.getAllProducts();
    return res.render('displayCRUDProduct.ejs', {
        dataTable: data,
    })
}

let postProduct = async(req, res) => {
    let message = await productService.createNewProduct(req.body);
    console.log(message);
    return res.send('Post product from server');
}

let getDisplayCreateNewProduct = (req, res) => {
    return res.render('displayCreateProduct.ejs')
}


module.exports = {
    getProducts: getProducts,
    postProduct: postProduct,
    getDisplayCreateNewProduct: getDisplayCreateNewProduct,
}