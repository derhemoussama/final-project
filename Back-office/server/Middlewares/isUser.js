const isAdminAndManager = (req, res, next) => {
   
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

  
    if (req.user.role !== 'admin' && req.user.role !== 'manager') {
        return res.status(403).json({ message: 'Access forbidden' });
    }

    next();
};

module.exports = isAdminAndManager;