// routes/productRoute.js
const router = require("express").Router();

const {
  getProducts,
  AddProduct,
  RemoveProduct,
  EditProduct,
  getProductById,
  searchProducts,
} = require("../Controllers/productController");
const authMiddleware = require("../Middlewares/authMiddleware");
const isAdmin = require("../Middlewares/isAdmin");
const isAdminAndManager = require("../Middlewares/isUser");
const upload = require("../Middlewares/upload");

router.get("/", getProducts);
router.get('/search',searchProducts);
router.post(
  "/add",
  upload.array("images[]"),
  AddProduct
);
router.delete("/delete/:id", RemoveProduct);
router.put("/edit/:id", isAdminAndManager, EditProduct);
router.get("/:id", isAdminAndManager, getProductById);

module.exports = router;
