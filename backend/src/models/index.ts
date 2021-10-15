import mongoose from 'mongoose';

export const connectDB = async () => {
  const url = String(process.env.MONGODB_URL);
  // Connect to MongoDB
  mongoose.connect(url, (err) => {
    if (err) {
      console.error(`Failed to connect to MongoDB with URI: ${url}`);
      console.error(err.stack);
      process.exit(1);
    }
    console.log(`Connected to MongoDB with URI: ${url}`);
  });
};
