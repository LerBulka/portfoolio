
import express from 'express';
import cors from 'cors';
import db from './config/database.js';
import categoryRoute from './routes/categoryRoute.js';
import subcategoryRoute from './routes/subcategoryRoute.js';
import projectRoute from './routes/projectRoute.js';
import galleryRoute from './routes/galleryRoute.js';

import imageRoute from './routes/imageRoute.js';
import emailRoute from './routes/emailRoute.js';

import adminRoute from './routes/adminRoute.js';

const app = express();


try {
    await db.authenticate();
    console.log('Database connected...');
} catch(error){
    console.error('Connection error:', error);
}

app.use(cors({credentials: true, origin:'http://localhost:3000'}))

app.use(express.json());

app.use('/categories', categoryRoute);
app.use('/subcategories', subcategoryRoute);
app.use('/projects', projectRoute); 
app.use('/gallery', galleryRoute); 

app.use('/image', imageRoute);
app.use('/email', emailRoute);

app.use('/', adminRoute)

app.listen(5000, () => console.log('Server OK, running at port 5000'));

