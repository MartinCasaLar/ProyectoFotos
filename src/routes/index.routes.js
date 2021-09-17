const express = require ('express');
const router = express.Router ()

 router.use("/", require("./main.routes"))
 router.use("/user", require("./user.routes"))
 router.use("/fotos", require("./fotos.routes"))



module.exports = router