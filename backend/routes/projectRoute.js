import express from 'express';

import {
    getAllProjects,
    getProjectById,
    getAllProjectsBySubcategory,
    getAllProjectsByCategory,
    createProject,
    deleteProject,
} from '../controllers/projectController.js';

const projectrouter = express.Router();

projectrouter.get('/', getAllProjects);
projectrouter.get('/subcategory/:subcategoryId', getAllProjectsBySubcategory);
projectrouter.get('/category/:categoryId/all', getAllProjectsByCategory);
projectrouter.get('/:id', getProjectById);

//admin
projectrouter.post('/', createProject)
projectrouter.delete('/:id', deleteProject)

export default projectrouter;
