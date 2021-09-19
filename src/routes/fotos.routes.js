const express = require ('express');
const router = express.Router ()
const controller = require ("../controller/fotosController")

router.get('/', controller.getFotos)
router.get('/:id', controller.getFoto)

module.exports = router