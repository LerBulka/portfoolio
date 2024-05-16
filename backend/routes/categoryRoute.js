import express from 'express';

import {
    getAllCategories,
    getCategoryById,
} from '../controllers/categoryController.js';

const categoryrouter = express.Router();

categoryrouter.get('/',getAllCategories);
categoryrouter.get('/:id', getCategoryById);

export default categoryrouter;