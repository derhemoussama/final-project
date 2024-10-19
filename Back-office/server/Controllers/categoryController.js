// controllers/categoryController.js
const Category = require("../models/Category");

/**-----------------------------------------------
 * @desc    Create a New Category
 * @route   /categories/
 * @method  POST
 * @access  Public
 ------------------------------------------------*/
const createCategory = async (req, res) => {
    try {
      const {
        name,
        description,
        icon,
        featured,
        popular,
        tags,
        subcategories,
        colors,     
        materials,
        styles,
      } = req.body;
  
      const category = new Category({
        name,
        description,
        icon,
        featured,
        popular,
        tags,
        subcategories,
        colors,
        materials,
        styles,
      });
  
      await category.save();
      res.status(201).json(category);
    } catch (error) {
      console.error("Error creating category:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
/**-----------------------------------------------
 * @desc    Get All Categories
 * @route   /categories/
 * @method  GET
 * @access  Public
 ------------------------------------------------*/
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error("Error getting all categories:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**-----------------------------------------------
 * @desc    Get Category by ID
 * @route   /categories/:id
 * @method  GET
 * @access  Public
 ------------------------------------------------*/
const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    console.error("Error getting category by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**-----------------------------------------------
 * @desc    Update a Category
 * @route   /categories/:id
 * @method  PUT
 * @access  Public
 ------------------------------------------------*/

const updateCategory = async (req, res) => {
    try {
      const {
        name,
        icon,
        description,
        featured,
        popular,
        tags,
        subcategories,
        colors,
        materials,
        styles,
      } = req.body;
  
      const updatedCategory = await Category.findByIdAndUpdate(
        req.params.id,
        {
          name,
          icon,
          description,
          featured,
          popular,
          tags,
          subcategories,
          colors,
          materials,
          styles,
        },
        { new: true }
      );
      res.json(updatedCategory);
    } catch (error) {
      console.error("Error updating category:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

/**-----------------------------------------------
 * @desc    Delete a Category
 * @route   /categories/:id
 * @method  DELETE
 * @access  Public
 ------------------------------------------------*/
const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
