const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/education_dev");
    console.log("Connect Success!");
  } catch (error) {
    console.log("Fail");
  }
}
module.exports = { connect };
