import { Sequelize } from "sequelize";

const db = new Sequelize('db_storyku','root','',{
    host:'localhost',
    dialect: "mysql"
});

export default db;