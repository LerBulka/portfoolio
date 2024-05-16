import db from '../config/database.js';
import { DataTypes, Model } from 'sequelize';

class Category extends Model{}
Category.init(
    {
        category_id: {
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        name: {type:DataTypes.STRING},
        description:{type:DataTypes.STRING},
    },
    {
        sequelize:db,
        tableName:'categories',
        freezeTableName:true,
        modelName:'Category',
        timestamps:false,
    },
);

export default Category;