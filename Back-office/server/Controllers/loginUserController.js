// controllers/loginUserController.js

const jwt = require("jsonwebtoken"); // Ajout de l'importation de jsonwebtoken
const User = require("../models/User");

const bcrypt = require("bcrypt");

/**-----------------------------------------------
 * @desc    Login User 
 * @route   /api/login
 * @method  POST
------------------------------------------------*/
// const loginUser = async (req, res) => {
//   const { emailOrUsername, password } = req.body;
//   try {
//     // Vérifiez si l'utilisateur existe avec l'email ou le username donné
//     const user = await User.findOne({
//       $or: [{ email: emailOrUsername }, { Username: emailOrUsername }],
//     });
//     if (!user) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }
//     // Vérifiez si le mot de passe est correct en comparant le hachage stocké
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }
//     const token = jwt.sign(
//       { userId: user._id, username: user.Username, roles: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );
//     const message = `Hi ${user.Username}, You are ${user.role},`;
//     console.log(message);
//     res
//       .cookie("userr", token, { maxAge: 86400000, httpOnly: true })
//       .status(201)
//       .json({token});
//   } catch (error) {
//     console.error("Error logging in:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// WORKS
// const loginUser = async (req, res) => {
//   const { emailOrUsername, password } = req.body;
//   try {
//     const user = await User.findOne({
//       $or: [{ email: emailOrUsername }, { Username: emailOrUsername }],
//     });
//     if (!user) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }
//     const token = jwt.sign(
//       { userId: user._id, username: user.Username, roles: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );
//     const message = `Hi ${user.Username}, You are ${user.role},`;
//     console.log(message);
//     res
//       .cookie("userr", token, { maxAge: 86400000, httpOnly: true })
//       .status(201)
//       .json({token});
//   } catch (error) {
//     console.error("Error logging in:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// module.exports = loginUser;
// user: user.Username, role: user.role 

// loginUser controller
const loginUser = async (req, res) => {
  const { emailOrUsername, password } = req.body;
  try {
    const user = await User.findOne({
      $or: [{ email: emailOrUsername }, { Username: emailOrUsername }],
    });
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const token = jwt.sign(
      { userId: user._id, username: user.Username, roles: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    const message = `Hi ${user.Username}, You are ${user.role},`;
    console.log(message);
    res.cookie("userr", token, { maxAge: 86400000, httpOnly: true })
      .status(201)
      .json({ user, token }); // Return both user and token
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = loginUser;
