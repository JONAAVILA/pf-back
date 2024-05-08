const { CLiente } = require('../db');

const getClienteByName = async (name)=>{
    // console.log(name)
    const clienteBd = await Cliente.findAll({where: {nombre: name.toUpperCase()}});
    if(!clienteBd) throw Error("Cliente no Registrado o no existe")
    return clienteBd;
}
module.exports = {
    getClienteByName
}