import {Sequelize} from "sequelize-typescript";
Const Sequelize= new Sequelize{(
    database: "library_db",
    dialect:"postgres",
    username:"postgres",
    password:"admin",
    port:""
)}