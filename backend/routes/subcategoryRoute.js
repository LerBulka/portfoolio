import express from 'express';

import {
    getAllSubcategories,
    getSubcategoriesByCategoryId,
} from '../controllers/subcategoryController.js';

const subcategoryrouter = express.Router();

subcategoryrouter.get('/', getAllSubcategories);
subcategoryrouter.get('/category/:categoryId', getSubcategoriesByCategoryId);

export default subcategoryrouter;