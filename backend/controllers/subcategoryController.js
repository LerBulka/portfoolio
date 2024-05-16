import Subcategory from "../models/subcategory.js";

export const getAllSubcategories = async (req, res) => {
    try {
        const subcategories = await Subcategory.findAll({
            include:['category'],
            where:{},
        });
        res.json(subcategories);
    }catch (error) {
        res.json({message:error.message});
    }
};

export const getSubcategoryById = async (req, res) => {
    try {
        const subcategory = await Subcategory.findAll({
            include:['category'],
            where: {id:req.params.id},
        });
        res.json(subcategory[0]);
    }catch (error) {
        res.json({message:error.message});
    }
};

export const getSubcategoriesByCategoryId = async (req, res) => {
    try {
      const subcategories = await Subcategory.findAll({
        include: ['category'],
        where: { category_id: req.params.categoryId },
      });
      res.json(subcategories);
    } catch (error) {
      res.json({ message: error.message });
    }
  };