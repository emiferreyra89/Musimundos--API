const path = require('path');
const db = require('../../database/models');

const cancionesAPIController = {
    list: async (req, res) => {
        try {
            await db.Cancion.findAll({
                include: [{association: 'medio'},{association: 'genero'}]
            })
            .then(canciones => {
                return res.status(200).json({
                    data: canciones,
                    total: canciones.length,
                    status: 200,
                    url:'/api/canciones'
                })
            })
            //return res.send('Devuelve la información de todas las canciones resgitradas en nuestra plataforma, tomando en cuenta las asociaciones de estas con el genero y el tipo de medio utilizado.');
        } catch (error) {
            console.log(error.message);
        }
    }
}
module.exports = cancionesAPIController;