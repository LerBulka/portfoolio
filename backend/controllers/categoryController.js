import Category from '../models/category.js';

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    }catch (error) {
        res.json({message:error.message});
    }
};

export const getCategoryById = async (req, res)=> {
    try {
        const category = await Category.findAll({
            where: {category_id:req.params.id},
        });
        res.json(category[0]);
    }catch(error) {
        res.json({message:error.message});
    }
};

