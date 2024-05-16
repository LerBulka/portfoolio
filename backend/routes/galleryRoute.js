import express from 'express';

import {
    getImagesByProjectId,
    getAllImages
} from '../controllers/imageController.js';

const imagerouter = express.Router();

imagerouter.get('/', getAllImages);
imagerouter.get('/:projectId', getImagesByProjectId);

export default imagerouter;