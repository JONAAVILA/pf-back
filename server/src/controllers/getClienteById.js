const { Cliente, Abogado } = require('../db')

const getClienteById = async (id)=>{
    // console.log(id)
    const cliente = await Cliente.findByPk(id.toUpperCase(), {
        include: {
            model: Abogado, 
            attributes: ["nombre", "dificultad", "duracion", "temporada", "imagen"],
            through:{
                attributes: [],
            },
        },
    });
    if(!cliente) throw Error("Cliente no Registrado o no existe")
    return cliente;
}

module.exports ={
    getClienteById,
}