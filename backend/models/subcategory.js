import db from '../config/database.js';
import { DataTypes, Model } from 'sequelize';
import Category from '../models/category.js';

class Subcategory extends Model {}
Subcategory.init(
    {
        subcategory_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        name:{type:DataTypes.STRING},
        category_id:{type:DataTypes.INTEGER},
    },
    {
        sequelize:db,
        tableName:'subcategories',
        freezeTableName:true,
        modelName:'Subcategory',
        timestamps:false,
    },
);

Subcategory.belongsTo(Category, {foreignKey:'category_id', as:'category'});
Category.hasMany(Subcategory, {as:'subcategories',foreignKey:'category_id'});


export default Subcategory;