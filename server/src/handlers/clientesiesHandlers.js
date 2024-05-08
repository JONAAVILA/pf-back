const { getClienteById } = require('../controllers/getClienteById');
const { getAllCliente } = require('../controllers/getAllClientes');
const { getClienteByName } = require('../controllers/getClienteByName');


const clientesHandler = async (req, res)=>{
    const { name } = req.query;
      
    try {
        if(!name) {
            const response = await getAllCliente()
            res.status(200).json(response)
        } else {
            const countyByName = await getClienteByName(name)
            res.status(200).json(countyByName);
        };
        } catch (error) {
            res.status(400).json({error: error.message})
    }
    
};

const clientesDetailHandler = async (req, res)=>{
    const {id} = req.params;
    // res.status(200).send(`Detalle del Usuario ${id}`); //? esto fue de solo prueba de inicio 42:57
    
try {
    const response = await getClienteById(id);
    res.status(200).json(response);
   
} catch (error) {
    res.status(400).json(error = error.message)
}



};

module.exports = {
    clientesHandler,
    clientesDetailHandler,
    
}