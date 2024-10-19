// routes/categoryRoute.js
const express = require("express");
const router = express.Router();

const categoryController = require("../Controllers/categoryController");
const authMiddleware = require("../Middlewares/authMiddleware");
const isAdminAndManager = require('../Middlewares/isUser');


router.post("/",authMiddleware,isAdminAndManager,categoryController.createCategory);
router.get("/",authMiddleware,isAdminAndManager, categoryController.getAllCategories);
router.get("/:id",authMiddleware,isAdminAndManager, categoryController.getCategoryById);
router.put("/:id",authMiddleware, isAdminAndManager,categoryController.updateCategory);
router.delete("/:id",authMiddleware, isAdminAndManager,categoryController.deleteCategory);

module.exports = router;
