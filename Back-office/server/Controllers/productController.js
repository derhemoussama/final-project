// controllers/productController.js

const Product = require("../models/Product");

/**
 * @desc    Get products with pagination
 * @route   /products/
 * @method  GET
 * @access  Public
 */

const getProducts = async (req, res) => {
  const PRODUCTS_PER_PAGE = 5; // Nombre de produits par page
  const { pageNumber } = req.query;
  try {
    let products;
    if (pageNumber) {
      // Si le numéro de page est spécifié, paginer les produits avec tri et peuplement
      products = await Product.find()
        .skip((pageNumber - 1) * PRODUCTS_PER_PAGE)
        .limit(PRODUCTS_PER_PAGE)
        .sort({ createdAt: -1 }) ;// Trie par date de création décroissante
        // Peuple le champ "user", en excluant le mot de passe
    } else {
      // Sinon, récupérer tous les produits avec tri et peuplement
      products = await Product.find()
        .sort({ createdAt: -1 }); // Trie par date de création décroissante
         // Peuple le champ "user", en excluant le mot de passe
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
/**
 * @desc    Search products
 * @route   /products/search
 * @method  GET
 * @access  Public
 */
const searchProducts = async (req, res) => {
  const { search } = req.query;
  try {
    let query = {};

    if (search) {
      // Si un paramètre de recherche est spécifié, construisez une requête pour rechercher les produits
      query = {
        $or: [
          { productName: { $regex: search, $options: 'i' } }, // Recherche par nom de produit (insensible à la casse)
          { description: { $regex: search, $options: 'i' } }, // Recherche par description (insensible à la casse)
        ],
      };
    }

    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/**
 * @desc    Add a new product
 * @route   /products/add
 * @method  POST
 * @access  Public
 */

/**
 * @desc    Add a new product
 * @route   /products/add
 * @method  POST
 * @access  Public
 */
const AddProduct = async (req, res) => {
  const paths = req.files;
  const images = [];
  paths.forEach((element) => {
    images.push(`${req.protocol}://${req.get('host')}/${element.path}`);
  });
  const product = new Product({
    productName: req.body.productName,
    description: req.body.description,
    price: req.body.price,
    images: images,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @desc    Remove a product
 * @route   /products/delete/:id
 * @method  DELETE
 * @access  Public
 */

const RemoveProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Edit a product
 * @route   /products/edit/:id
 * @method  PUT
 * @access  Public
 */

const EditProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @desc    Get product by ID
 * @route   /products/:id
 * @method  GET
 * @access  Public
 */

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  AddProduct,
  RemoveProduct,
  EditProduct,
  getProductById,
  searchProducts,
};
