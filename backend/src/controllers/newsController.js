import News from '../models/News.js';  // use import if needed

export const getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ date: -1 });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
