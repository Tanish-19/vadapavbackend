import cron from 'node-cron';
import fetchAndUpdateNews from './fetchNews.js';

cron.schedule('*/1 * * * *', () => {
  console.log('⏰ Running cron job: Fetching news every 10 min...');
  fetchAndUpdateNews();
});
