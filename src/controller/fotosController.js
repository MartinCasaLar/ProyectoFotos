const db =require('../database/fotos.json')
const controller = {
    getFotos: (req, res, next) =>{
        res.render("index", {fotos:db});     
    }, 
    getFoto: (req, res, next) =>{
        res.send(`Te busco la Foto ${req.params.id}`)
}
}

module.exports = controller