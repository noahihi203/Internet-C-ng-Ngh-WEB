import { where } from "sequelize";
import db from "../models/index";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

let getAllProducts = (productId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = "";
      if (productId === "ALL") {
        products = await db.Product.findAll({
          raw: true,
        });
      }
      if (productId && productId !== "ALL") {
        products = await db.Product.findOne({
          where: { pd_id: productId },
          raw: true,
        });
      }
      resolve(products);
    } catch (e) {
      reject(e);
    }
  });
};
let createNewProduct = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Product.create({
        name: data.name,
        price: data.price,
        type_of_clothes: data.type_of_clothes,
        description: data.description,
        cat_id: data.cat_id,
        size: data.size,
      });
      resolve({
        errCode: 0,
        message: "OK",
      });
    } catch (e) {
      reject(e);
    }
  });
};
let deleteProduct = (productId) => {
  return new Promise(async (resolve, reject) => {
    let product = await db.Product.findOne({
      where: { pd_id: productId },
      raw: false,
    });
    if (!product) {
      resolve({
        errCode: 2,
        errMessage: `The product isn't exist`,
      });
    }
    await db.Product.destroy({
      where: { pd_id: productId },
    });
    resolve({
      errCode: 0,
      message: `The product is deleted`,
    });
  });
};
let updateProductData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.pd_id) {
        resolve({
          errCode: 2,
          errMessage: "Missing required parameters!",
        });
      }
      let product = await db.Product.findOne({
        where: { pd_id: data.pd_id },
        raw: false,
      });
      if (product) {
        product.name = data.name;
        product.price = data.price;
        product.type_of_clothes = data.type_of_clothes;
        product.description = data.description;
        product.cat_id = data.cat_id;
        product.size = data.size;
        await product.save();
        resolve({
          errCode: 0,
          message: `Update the product succeeds!`,
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: `Product's not found!`,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  getAllProducts: getAllProducts,
  createNewProduct: createNewProduct,
  deleteProduct: deleteProduct,
  updateProductData: updateProductData,
};
