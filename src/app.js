const { urlencoded } = require("express");
const express = require ("express");
const app = express();
const path = require ("path")
const rutas = require('./routes/index.routes')


app.use(express.urlencoded({extended:false}));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs')

app.use("/", rutas)

module.exports = app