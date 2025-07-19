import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String, // e.g., "WebDev" or "AI/ML"
  date: { type: Date, default: Date.now },
});

const News = mongoose.model('News', newsSchema);

export default News; // ✅ Add default export for ES Modules!
