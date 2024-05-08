const { getAllAbogados } = require("../controllers/getAllAbogados");
const { createAbogadoBd } = require("../controllers/postAbogadosController");

const getAbogadosHandler = async (req, res)=>{
    try {
        const response = await getAllAbogados()
        res.status(200).json(response);
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// Creando Abogados
const postAbogadosHandler = async (req, res)=>{
    const { id, matricula, nombre, apellido, correo, telefono, calle, numero,codigo_postal, ciudad, pais, clientes } = req.body;
console.log('Julian3')
    try {
        const response = await createAbogadoBd(id, matricula, nombre, apellido, correo, telefono, calle, numero,codigo_postal, ciudad, pais, clientes);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    // res.status(200).send(`creando actividades`);
};

module.exports = {
    getAbogadosHandler,
    postAbogadosHandler,
    
}