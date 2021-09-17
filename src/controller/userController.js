const controller = {
    getUsers: (req, res, next) =>{
        res.send("Soy una ruta Principal de usuarios")   
    }, 
    getUser: (req, res, next) =>{
        res.send(`Tebusco el user ${req.params.id}`)
}
}

module.exports = controller