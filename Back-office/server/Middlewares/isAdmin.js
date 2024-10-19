// isAdmin.js

const isAdmin = (req, res, next) => {
    // Vérifiez si l'utilisateur est authentifié
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  console.log("user Role", req.user.roles)
    // Vérifiez si l'utilisateur a le rôle d'administrateur
    if (req.user.roles !== 'admin') {
      return res.status(403).json({ message: 'Access forbidden' });
    }
  
    // Si l'utilisateur est un administrateur, passez à la route suivante
    next();
  };
  
  module.exports = isAdmin;
  