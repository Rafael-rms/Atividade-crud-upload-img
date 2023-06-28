const sequelize = require('sequelize');

const conection = require('../database/database');


const livro = conection.define(
    'tbl_paciente',
    {
        nome_paciente:{
            type:sequelize.STRING(500),
            allowNull: false
        },
        telefone_paciente:{
            type:sequelize.STRING(10),
            allowNull: false
        },
        celular_paciente:{
            type:sequelize.STRING(11),
            allowNull: false
        },
        email_paciente:{
            type:sequelize.STRING(100),
            allowNull: false
        },
        nome_responsavel:{
            type:sequelize.STRING(500),
            allowNull: true
        },
        telefone_responsavel:{
            type:sequelize.STRING(10),
            allowNull: true
        },
        imagem_paciente:{
            type:sequelize.STRING(500),
            allowNull: false
        }
    }
);



//livro.sync({force:false});


module.exports = livro;