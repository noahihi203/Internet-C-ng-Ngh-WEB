import { where } from "sequelize";
import db from "../models/index";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

let getAllProducts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = db.Product.findAll({
        raw: true,
      });
      resolve(products);
    } catch (e) {
      reject(e);
    }
  });
};

let createNewProduct = async (data) => {
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
      resolve("create a new product succeed!");
    } catch (e) {
      reject(e);
    }
  });
};


module.exports = {
  getAllProducts: getAllProducts,
  createNewProduct: createNewProduct,
};
