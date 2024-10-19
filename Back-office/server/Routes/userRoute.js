// routes/userRoute.js
const router = require("express").Router();
// const isSuperAdmin = require('../Middlewares/isSuperAdmin');
const {
  getUsers,
  AddUser,
  RemoveUser,
  EditUser,
  getProfileUser,
  searchUsers,
} = require("../Controllers/UserController");
const authMiddleware = require("../Middlewares/authMiddleware");
const isAdmin = require("../Middlewares/isAdmin");

router.get("/", authMiddleware, isAdmin, getUsers);
router.post("/add",authMiddleware, AddUser);
router.delete("/delete/:id",authMiddleware, isAdmin, RemoveUser);
router.put("/edit/:id", authMiddleware,isAdmin, EditUser);
router.get("/:id", isAdmin, getProfileUser);
router.post("/search", searchUsers)

module.exports = router;
// authMiddleware,isAdmin,
