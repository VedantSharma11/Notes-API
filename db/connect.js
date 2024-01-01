const mongoose = require("mongoose");

const connectdb = async (uri) => {
  try {
    await mongoose.connect(uri, {
      writeConcern: {
        w: "majority",
      },
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectdb;
