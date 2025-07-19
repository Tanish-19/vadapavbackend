import News from '../models/News.js';

const fetchAndUpdateNews = async () => {
  try {
    console.log('🔄 Using static dummy news for testing...');

    // ✅ Keep old news — don't delete!
    // await News.deleteMany({});
    // console.log('✅ Old news deleted.');

    const newArticles = [
      {
        title: 'New WebDev Opening',
        content: 'Company XYZ is hiring a frontend dev.',
        category: 'WebDev'
      },
      {
        title: 'AI/ML Research Internship',
        content: 'New opportunity for AI/ML students.',
        category: 'AI/ML'
      }
    ];

    await News.insertMany(newArticles);
    console.log('✅ Dummy news inserted successfully!');
  } catch (err) {
    console.error('❌ Error updating news:', err);
  }
};

export default fetchAndUpdateNews;
