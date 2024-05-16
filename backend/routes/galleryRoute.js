import express from 'express';

import {
    getImagesByProjectId,
    getAllImages,
    createImage,
    deleteImage
} from '../controllers/imageController.js';

const imagerouter = express.Router();

imagerouter.get('/', getAllImages);
imagerouter.get('/:projectId', getImagesByProjectId);
imagerouter.post('/', createImage);
imagerouter.delete('/:id', deleteImage);

export default imagerouter;