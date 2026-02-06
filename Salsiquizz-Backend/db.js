const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Optional: for environment variables
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECT_STRING_BDD, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;   