const express = require ('express');
const router = express.Router ()

router.get('/', (req,res,next)=> {res.send("Soy la ruta Principal")})

module.exports = router