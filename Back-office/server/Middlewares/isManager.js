// isManager.js

const isManager = (req, res, next) => {
    // Vérifiez si l'utilisateur est authentifié
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    // Vérifiez si l'utilisateur a le rôle de gestionnaire
    if (req.user.role !== 'manager') {
      return res.status(403).json({ message: 'Access forbidden' });
    }
  
    // Si l'utilisateur est un gestionnaire, passez à la route suivante
    next();
  };
  
  module.exports = isManager;
  