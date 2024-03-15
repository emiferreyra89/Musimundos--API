const path = require('path');
const db = require('../../database/models');

const genresAPIController = {
    list: async (req, res) => {
        try {
            await db.Genero.findAll()
            .then(generos => {
                return res.status(200).json({
                    data: generos,
                    total: generos.length,
                    status: 200,
                    url:'/api/generos'
                })
            })
            //return res.send('Devuelve datos sobre los generos de las canciones.');
        } catch (error) {
           console.log(error.message); 
        }
    }
}
module.exports = genresAPIController;