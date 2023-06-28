const sequelize = require('sequelize');


const conection = new sequelize(
    'crud_upload_img',
    'root',
    '',
    {
        host: 'localhost',
        port: '3306',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = conection;