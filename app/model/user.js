"use strict";

const crypto = require('crypto')
const mongoose = require('mongoose')
// user schema
const userScheama = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      min: 3,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
    },
  },
  { timestamps: true }
);

// virtual
userScheama
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

// methods
userScheama.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password; // true false
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },

  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};

module.exports = mongoose.model("User", userScheama);
