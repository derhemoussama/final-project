// controllers/UserController.js

const User = require('../models/User');
const bcrypt = require('bcrypt');

/**
 * @desc    Get all users
 * @route   /users/
 * @method  GET
 * @access  Public
 */

// const getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users); 
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const getUsers = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const users = await User.find()
      .skip((page - 1) * limit)
      .limit(limit);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Add a new user
 * @route   /users/add
 * @method  POST
 * @access  Public
 */

const AddUser = async (req, res) => {
  const { fullname, Username, email, password, role, status } = req.body;

  try {
    // Générer un hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur avec le mot de passe haché
    const user = new User({
      fullname,
      Username,
      email,
      password: hashedPassword,
      role,
      status
    });

    // Enregistrer l'utilisateur dans la base de données
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


/**
 * @desc    Remove a user
 * @route   /users/delete/:id
 * @method  DELETE
 * @access  Public
 */

const RemoveUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/**
 * @desc    Edit a user
 * @route   /users/edit/:id
 * @method  PUT
 * @access  Public
 */

const EditUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


/**
 * @desc    Get profile of a user
 * @route   /users//:id
 * @method  GET
 * @access  Public
 */

const getProfileUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Search users by name, email, status, or role
 * @route   /users/search
 * @method  POST
 * @access  Public
 */
// const searchUsers = async (req, res) => {
//   const { query, criteria } = req.body;
//   try {
//     let searchQuery = {};
//     if (criteria === 'name') {
//       searchQuery = { fullname: { $regex: query, $options: 'i' } };
//     } else if (criteria === 'email') {
//       searchQuery = { email: { $regex: query, $options: 'i' } };
//     } else if (criteria === 'status') {
//       searchQuery = { status: query };
//     } else if (criteria === 'role') {
//       searchQuery = { role: query };
//     }
//     const users = await User.find(searchQuery);
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
const searchUsers = async (req, res) => {
  const { query, criteria } = req.body;
  try {
    let searchQuery = {};
    if (criteria === 'name') {
      searchQuery = { fullname: { $regex: new RegExp(query, 'i') } };
    } else if (criteria === 'email') {
      searchQuery = { email: { $regex: new RegExp(query, 'i') } };
    } else if (criteria === 'role') {
      searchQuery = { role: { $regex: new RegExp(query, 'i') } };
    }
    const users = await User.find(searchQuery);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers, AddUser, RemoveUser, EditUser, getProfileUser, searchUsers };


