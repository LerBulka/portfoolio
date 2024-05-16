import db from '../config/database.js';
import { DataTypes, Model } from 'sequelize';
import Category from './category.js';
import Subcategory from './subcategory.js';

class Project extends Model{}
Project.init(
    {
        project_id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title:{type:DataTypes.STRING},
        subtitle:{type:DataTypes.STRING},
        description:{type:DataTypes.STRING},
        image_name:{type:DataTypes.STRING},
        category_id:{type:DataTypes.INTEGER},
        subcategory_id:{type:DataTypes.INTEGER},
        project_url:{type:DataTypes.STRING},
        github_url:{type:DataTypes.STRING},
    },
    {
        sequelize:db,
        tableName:'projects',
        freezeTableName:true,
        modelName:'Project',
        timestamp:true,
    },
);

Project.belongsTo(Category, {foreignKey:'category_id', as: 'category'});
Category.hasMany(Project, {as:'project', foreignKey:'category_id'});

Project.belongsTo(Subcategory, {foreignKey:'subcategory_id', as: 'subcategory'});
Subcategory.hasMany(Project, {as:'project', foreignKey:'project_id'});

export default Project;

