import db from '../config/database.js';
import { DataTypes, Model } from 'sequelize';
import Project from './project.js';

class Image extends Model{}
Image.init(
    {
        image_id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description:{type:DataTypes.STRING},
        project_id:{type:DataTypes.INTEGER},
        image_url:{type:DataTypes.STRING},
    },
    {
        sequelize:db,
        tableName:'images',
        freezeTableName:true,
        modelName:'Image',
        timestamp:true,
    },
);

Image.belongsTo(Project, {foreignKey:'project_id', as:'project'});
Project.hasMany(Image, {as:'image', foreignKey:'project_id'});

export default Image;
