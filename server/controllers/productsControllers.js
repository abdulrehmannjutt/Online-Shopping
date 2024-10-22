const productModel = require("../models/productsModel");

const createProduct = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;

    // Multer stores the image file in req.file
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // File path where the image is stored
    const imagePath = req.file.path;

    const productExist = await productModel.findOne({ name: name });

    if (!productExist) {
      const productAdded = await productModel.create({
        name,
        image: imagePath,
        price,
        category,
        description,
      });
      if (productAdded) {
        // product created
        return res.status(201).json(productAdded);
      } else {
        // product creation failed
        return res.status(400).send("failed to create product");
      }
    } else {
      return res.status(409).json({ message: "product already exist" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error");
  }
};

const readProducts = async (req, res) => {
  try {
    const products = await productModel.find();

    if (products) {
      // products founded
      return res.status(200).json(products);
    } else {
      // products not founded
      return res.status(204).send("products not found");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send("server error");
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // const {}

    const isProductUpdated = await productModel.updateOne({ _id: id }, {});

    if (isProductUpdated.acknowledged) {
      return res.status(200).send("product updated");
    } else {
      return res.status(404).send("prduct did not update");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send("server error");
  }
};

const deleteProduct = async (req, res) => {
  try {
    console.log("hello");
    const { id } = req.params;

    console.log("id", id);

    const deletedProduct = await productModel.deleteOne({ _id: id });

    console.log("delete product", deletedProduct);

    if (deletedProduct.acknowledged) {
      res.status(204).send("product deleted successfully");
    } else {
      return res
        .status(404)
        .json({ message: `Product with ID ${id} not found.` });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = { createProduct, readProducts, updateProduct, deleteProduct };
