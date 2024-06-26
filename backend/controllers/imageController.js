import Image from '../models/image.js';

export const getImagesByProjectId = async (req, res) => {
    try{
        const images = await Image.findAll({
            include:['project'],
            where:{project_id:req.params.projectId},
        });
        res.json(images);
    }catch(error){
        res.json({message:error.message});
    }
};

export const getAllImages = async(req, res) => {
    try{
        const images = await Image.findAll({
            include:[],
            where:{},
            order:[['createdAt', 'DESC']],
        });
        res.json(images);
    }catch(error){
        res.json({message:error.message});
    }
};

export const createImage = async (req, res) => {
    try {
        await Image.create(req.body);
        res.json({message: 'Images Added'});
    }catch (error) {
        res.json({message:error.message});
    }
};

export const deleteImage = async (req, res) => {
    try {
        await Image.destroy({
            where: {project_id:req.params.id},
        });
        res.json({message: 'Image Deleted'});
    }catch (error) {
        res.json({message:error.message});
    }
};