const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Consulta',{
        apellido:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1,20]
            }
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1,20]
            }
        },
        correo:{
            type: DataTypes.STRING,
            unique: true,
            validate:{
                len: [1,50]
            }
        },
        telefono:{
            type: DataTypes.INTEGER,
            unique: true,
        },
        consulta:{
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                len: [1,200]
            }
        }
    })
}