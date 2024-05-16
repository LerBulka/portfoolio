import Project from '../models/project.js';

export const getAllProjects = async(req, res) => {
    try{
        const projects = await Project.findAll({
            include:['category', 'subcategory'],
            where:{},
            order:[['createdAt', 'DESC']],
        });
        res.json(projects);
    }catch(error){
        res.json({message:error.message});
    }
};

export const getProjectById = async(req, res) => {
    try{
        const project = await Project.findAll({
            include:['category', 'subcategory'],
            where:{project_id:req.params.id},
        });
        res.json(project[0]);
    }catch(error){
        res.json({message:error.message});
    }
};

export const getAllProjectsByCategory = async (req, res) => {
    try {
        const projects = await Project.findAll({
            include: ['category', 'subcategory'],
            where: { category_id: req.params.categoryId },
            order: [['createdAt', 'ASC']],
        });
        res.json(projects);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const getAllProjectsBySubcategory = async (req, res) => {
    try {
        const projects = await Project.findAll({
            include: ['category', 'subcategory'],
            where: { subcategory_id: req.params.subcategoryId },
            order: [['createdAt', 'DESC']],
        });
        res.json(projects);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const createProject = async (req, res) => {
    try {
        await Project.create(req.body);
        res.json({message: 'Project Created'});
    }catch (error) {
        res.json({message:error.message});
    }
};

export const deleteProject = async (req, res) => {
    try {
        await Project.destroy({
            where: {project_id:req.params.id},
        });
        res.json({message: 'Project Deleted'});
    }catch (error) {
        res.json({message:error.message});
    }
};


