const path = require('path');
const db = require('../../database/models');
const { query } = require('express');

const albumesAPIController = {
    list: async (req, res) => {
        try {
            await db.Album.findAll({
                include: [{association: 'artista'}]
            })
            .then(albumes => {
                return res.status(200).json({
                    data: albumes,
                    total: albumes.length,
                    status: 200,
                    url:'/api/albumes'
                })
            })
            //return res.send('Devuelve la información de todos los albumes asociados con cada uno de los artistas registrados en nuestra plataforma.')
        } catch (error) {
            console.log(error.message);
        }
    },

    //////...Detalle de un álbum asociado a un ('id') de un artista indicado en la ruta...
    // detail: async (req, res) => {
    //     try {
    //         const {id} = req.params
    //         await db.Album.findOne({
    //             where: {id_artista: id},
    //             include:[{association:'artista'}]
    //         })
    //         .then(album => {
    //             return res.status(200).json({
    //                 data: album,
    //                 status: 200,
    //                 url:'/api/album/:id'
    //             })
    //         })
    //         // return res.send('Devuelve el detalle de un album asociado a un (" id ") de un artista indicado en la ruta o en la query string.');
    //     } catch (error) {
    //          console.log(error.message);
    //     }
    // },

    //////...Detalle de un álbum segun ('id') indicado en la ruta, asociado a un de un artista...
    detail: async (req, res) => {
        try {
            const {id} = req.params
            await db.Album.findOne({
                where: {id},
                include:[{association:'artista'}]
            })
            .then(album => {
                return res.status(200).json({
                    data: album,
                    status: 200,
                    url:'/api/album/:id'
                })
            })
            // return res.send('Devuelve el detalle de un album asociado a un (" id ") de un artista indicado en la ruta o en la query string.');
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = albumesAPIController;