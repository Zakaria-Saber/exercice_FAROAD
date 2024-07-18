// Importing Sequelize class from sequelize library.
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('faroad', 'postgres', 'root', {
    // Creating a new Sequelize instance
    host: 'localhost',
    dialect:  'postgres',
    port: 3000,
});

export default sequelize;