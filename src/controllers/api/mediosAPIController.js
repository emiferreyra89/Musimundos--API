const path = require('path');
const db = require('../../database/models');

const mediosAPIController = {
    list: async (req, res) => {
        try {
            await db.Medio.findAll()
            .then(medios => {
                return res.status(200).json({
                    data: medios,
                    total: medios.length,
                    status: 200,
                    url:'/api/medios'
                })
            })
            //return res.send('Devuelve la información sobre los tipos de medios utilizados en el grabado de las canciones.');
        } catch (error) {
            console.log(error.message);
        }
    }
}
module.exports = mediosAPIController;