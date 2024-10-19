// //models/Customer.js

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const customerSchema = new Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true },
//   adress: { type:String, required:false},
//   phone: { type:String, required:false},
//   password: { type: String, required: true },
//   verified: { type: Boolean, default: false },
//   verificationToken: { type: String },
// });

// module.exports = mongoose.model("Customer", customerSchema);
//models/Customer.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  adress: { type:String, required:false},
  phone: { type:String, required:false},
  password: { type: String, required: true },
  verified: { type: Boolean, default: false },
  verificationToken: { type: String },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    required: true,
    default: 'active', // Par défaut, les nouveaux utilisateurs sont des managers
  }, 
},
{ timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);