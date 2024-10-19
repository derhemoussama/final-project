//models/User.js

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const createUser = new schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    Username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ['admin', 'manager'],
      required: true,
      default: 'manager', // Par défaut, les nouveaux utilisateurs sont des managers
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      required: true,
      default: 'active', // Par défaut, les nouveaux utilisateurs sont des managers
    }, 
  },
  { timestamps: true }
);

let User = mongoose.model("User", createUser);

module.exports = User;
