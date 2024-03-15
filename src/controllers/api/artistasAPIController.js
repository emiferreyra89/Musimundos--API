const path = require('path');
const db = require('../../database/models/index');
const { log } = require('console');

const artistasAPIController = {
    list: async (req, res) => {
        try {
            await db.Artista.findAll()
            .then(artistas => {
                return res.status(200).json({
                    data: artistas,
                    total: artistas.length,
                    status: 200,
                    url:'/api/artistas'
                })
            })
            //return res.send(artistas);
        } catch (error) {
            console.log(error.message);
        }
    },

    create: async (req,res) => {
        try {
            const {nombre} = req.body
            await db.Artista.create({nombre})
            .then(artista => {
                return res.status(200).json({
                    data: artista,
                    status: 200,
                    url:'/api/artistas/create'
                })
            })
            //return res.send('Puedes agregar un nuevo artista a nuestra base de datos. Para porder utilizar esta API, debes ejecutar la ruta /artistas/create/id desde la plataforma POSTMAN');
        } catch (error) {
            console.log(error.message);
        }
    },

    update: async (req,res) => {
        try {
            const {id} = req.params
            const {nombre} = req.body
            await db.Artista.update({nombre},{where:{id}})
            .then(() => {
                return res.status(200).json({
                    id: id,
                    data: 'update Ok',
                    status: 200,
                    url:'/api/artistas/update/:id'
                })
            }) 
            //return res.send('Puedes modifcar el nombre del artista en nuestra base de datos. Para porder utilizar esta API, debes ejecutar la ruta /artistas/update/id desde la plataforma POSTMAN');
        } catch (error) {
            console.log(error.message);
        }
    },

    destroy: async (req,res) => {
        try {
            const {id} = req.params
            await db.Artista.destroy({
            where: {id}, force: true
            })
            .then(() => {
                return res.status(200).json({
                    id: id,
                    data: 'delete Ok',
                    status: 200,
                    url:'/api/artistas/delete/:id'
                })
            })
            //return res.send('Puedes eliminar un artista a nuestra base de datos. Para porder utilizar esta API, debes ejecutar la ruta /artistas/delete/id desde la plataforma POSTMAN');
        } catch (error) {
            console.log(error.message);
        }
    }
}
module.exports = artistasAPIController;