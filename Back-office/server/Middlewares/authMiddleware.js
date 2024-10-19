// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const authMiddleware = async (req, res, next) => {
//     try {
//         // Récupérez le jeton JWT du cookie "userr"
//         const token = req.cookies.userr;

//         if (!token) {
//             throw new Error();
//         }
//         console.log('testing token:', token);
//         // Vérifiez si le jeton est valide
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         console.log('Decoded Token:', decoded);
//         // Recherchez l'utilisateur dans la base de données en fonction de l'ID extrait du jeton
//         const user = await User.findById(decoded.userId);

//         if (!user) {
//             throw new Error();
//         }

//         // Stockez les informations de l'utilisateur dans req.user pour une utilisation ultérieure
//         req.user = user;
//         next();
//     } catch (error) {
//         res.status(401).json({ message: 'Unauthorized' });
//     }
// };

// WORKS
// const authMiddleware = async (req, res, next) => {
//   try {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader.split(" ")[1];
//     const user = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = user;
//     console.log("user", user)
//     next();
//   } catch (error) {}
// };

// module.exports = authMiddleware;

// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const authMiddleware = async (req, res, next) => {
//   try {
//     const authHeader = req.headers["authorization"];
//     if (!authHeader) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }
//     const token = authHeader.split(" ")[1];
//     const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    
//     const user = await User.findById(decodedToken.userId);
//     if (!user) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }
    
//     req.user = {
//       id: user._id,
//       username: user.username,
//       role: user.role
//     };
    
//     next();
//   } catch (error) {
//     console.error("Auth middleware error:", error);
//     return res.status(401).json({ message: "Unauthorized" });
//   }
// };

// module.exports = authMiddleware;



const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    console.log("Authorization header:", authHeader); // Log the Authorization header
    if (!authHeader) {
      console.log("Authorization header is missing");
      return res.status(401).json({ message: "Authorization header is missing" });
    }
    
    const token = authHeader.split(" ")[1];
    if (!token) {
      console.log("Token is missing");
      return res.status(401).json({ message: "Token is missing" });
    }

    const user = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Authenticated user:", user);
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in authMiddleware:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;