const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("MONGODB Is Connected");
    });
  } catch (error) {
    console.log("Error Connecting to MONGODB : ", error.message);
  }
};

module.exports = connectDB;
