// // routes/customerRoute.js
// const express = require('express');
// const router = express.Router();
// const customerController = require('../Controllers/customerController');
// const isAdmin = require('../Middlewares/isAdmin');
// const isManager = require('../Middlewares/isManager');


// // Define routes for customer management
// router.get('/',isAdmin,isManager, customerController.getAllCustomers);
// router.get('/:usernameOrEmail',isAdmin,isManager, customerController.getCustomerByProfile);
// router.put('/:customerId',isAdmin,isManager, customerController.updateCustomer);
// router.delete('/:customerId',isAdmin,isManager, customerController.deleteCustomer);

// module.exports = router;
// routes/customerRoute.js
// const express = require('express');
// const router = express.Router();
// const customerController = require('../Controllers/customerController');
// const isAdmin = require('../Middlewares/isAdmin');
// const isManager = require('../Middlewares/isManager');


// // Define routes for customer management
// router.get('/', customerController.getAllCustomers);
// router.get('/:usernameOrEmail',isAdmin,isManager, customerController.getCustomerByProfile);
// router.put('/:customerId',isAdmin,isManager, customerController.updateCustomer);
// router.delete('/:customerId',isAdmin,isManager, customerController.deleteCustomer);

// module.exports = router;


const express = require('express');
const router = express.Router();
const customerController = require('../Controllers/customerController');
const isAdmin = require('../Middlewares/isAdmin');
const isManager = require('../Middlewares/isManager');
const authMiddleware = require('../Middlewares/authMiddleware');

// Define routes for customer management
router.get('/', authMiddleware, customerController.getAllCustomers);
router.get('/:usernameOrEmail', authMiddleware, isAdmin, isManager, customerController.getCustomerByProfile);
router.put('/:customerId', authMiddleware, isAdmin, customerController.updateCustomer);
router.delete('/:customerId', authMiddleware, isAdmin, customerController.deleteCustomer);

module.exports = router;