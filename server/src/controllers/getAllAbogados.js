const { Abogado } = require('../db')

const getAllAbogados = async ()=>{
    const getAllAbogadosBd = await Activity.findAll();

    return getAllAbogadosBd;
};


module.exports = {
    getAllAbogados,
}