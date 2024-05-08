const { Cliente } = require('../db');

const getAllCliente = async ()=>{
    const allClienteBDD = await Cliente.findAll({
      
        include: {
            model: Activity, 
            attributes: ["nombre", "dificultad", "duracion", "temporada"],
            through:{
                attributes: [],
            },
        },
});

    return allClienteBDD;
}

module.exports = {
    getAllCliente,
}