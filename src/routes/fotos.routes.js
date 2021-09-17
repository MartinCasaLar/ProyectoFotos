const express = require ('express');
const router = express.Router ()

router.get('/', (req,res,next)=> {res.send("Soy una ruta Principal de fotos")})

module.exports = router