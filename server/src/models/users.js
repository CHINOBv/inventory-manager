const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  const salt = await bcrypt.genSaltSync(12);
  const hash = await bcrypt.hashSync(user.password, salt);
  user.password = await hash;
  next();
});

userSchema.methods.comparePassword = async (password) => {
  const res = await bcrypt.compareSync(password, this.password);
  return res;
};

module.exports = model("User", userSchema);
