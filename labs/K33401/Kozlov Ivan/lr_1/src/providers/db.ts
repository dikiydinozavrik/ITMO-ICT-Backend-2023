// @ts-nocheck
import { Sequelize } from 'sequelize-typescript'
import RefreshToken from '../models/auth/RefreshToken'
import User from '../models/users/User'
import dotenv from "dotenv"
dotenv.config()

const sequelize = new Sequelize({
    database:  process.env.NAME,
    dialect:  process.env.DIALECT || 'sqlite',
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    storage: process.env.STORAGE,
    logging: console.log,
})


sequelize.addModels([User, RefreshToken])

sequelize
    .sync()
    .then(() => {
        //something here
        console.log('synced models')
    })
    .catch((e) => console.log(e));

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection()

export default sequelize