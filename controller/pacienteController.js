const express = require('express');

const pacienteModel = require('../model/pacienteModel')

const upload = require('../helpers/uploads/upload')



const router = express.Router();



router.post('/paciente/inserir', upload.array('imagem_paciente', 2), (req,res)=>{
    let {nome_paciente, telefone_paciente, celular_paciente, email_paciente, nome_responsavel, telefone_responsavel} = req.body;
    let imagem_paciente = req.files[0].path;

    pacienteModel.create(
        {
            nome_paciente,
            telefone_paciente,
            celular_paciente,
            email_paciente,
            nome_responsavel,
            telefone_responsavel, 
            imagem_paciente
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus:false,
                mensagemStatus:'Paciente cadastrado com sucesso'
            })
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:false,
                mensagemStatus:error
            })
        }
    );

});


module.exports = router;