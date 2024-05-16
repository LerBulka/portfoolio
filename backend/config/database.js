import { Sequelize } from "sequelize";

const db = new Sequelize ('portfoolio', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;