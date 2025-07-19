import mongoose from "mongoose";

const connectDB = async () => {
  console.log('✅ MONGO_URI:', process.env.MONGO_URI);

  const finalUri = process.env.MONGO_URI; // ✅ Do NOT add anything!

  try {
    const connectionInstance = await mongoose.connect(finalUri);
    console.log(`✅ MongoDB connected !! DB host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectDB;
