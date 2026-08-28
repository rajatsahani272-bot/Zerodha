const mongoose = require("mongoose");

const { UserSchema } = require("../schemas/UserSchemas");

const UserModel = mongoose.model("User", UserSchema);

module.exports = { UserModel };