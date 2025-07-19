



import dotenv from 'dotenv';
dotenv.config({ path: './.env' }); // ✅ use './.env'

import { app } from './app.js';
import connectDB from './db/index.js';

import fetchAndUpdateNews from './utils/fetchNews.js';

fetchAndUpdateNews(); // Run it once on startup


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 4000}`);
    });
  })
  .catch((error) => {
    console.error('❌ Error connecting to MongoDB:', error);
  });









// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// // import { DB_NAME } from './constant.js';
// import connectDB from './db/index.js';

// dotenv.config({path: './env'});


// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT || 3000, () => {
//       console.log(`Server is running on port ${process.env.PORT || 3000}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });











// require('dotenv').config();
// const cors = require('cors');
// const express = require('express');
// const app = express();

// const port = process.env.PORT || 3000;

// app.use(cors());


// ;(async () => {
//   try {
//     await mongoose.connect(`&{process.env.MONGO_URI}/&{DB_NAME}`)

//     app.on('error', (err) => {
//       console.error('Error connecting to MongoDB:', err);
//       throw err;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//   }
//   catch (error) {
//     console.error('Error during initialization:', error);
//     throw error;
//   }
// });

// app.get('/about', (req, res) => {
//   res.send('Hello bhai!!');
// });

// app.listen(port, () => {
//   // ✅ Use backticks, not single quotes
//   console.log(`Example app listening on port http://localhost:${port}`);
// });


// console.log('hello world');