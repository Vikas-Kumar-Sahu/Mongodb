const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema(
  {
    Username: {
      type: String,
      required: true
    },
    Password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const RegisterSchema = mongoose.Schema(
  {
    Fullname : {
      type: String,
      required: true
    },
    Username : {
      type: String,
      required: true
    },
    Password : {
      type: String,
      required: true
    },
    Address : {
      type: String,
      required: true
    },
    Phone : {
      type: Number,
      required: true
    },
  },
  {
    timestamps: true
  }
);

const Login = mongoose.model("Login", LoginSchema);
const Register = mongoose.model("Register", RegisterSchema);

module.exports = {
  Login,
  Register
};