const { application } = require("express");
const express = require("express");
const router = express.Router();

router.get('/', (request, response) => {
    response.render("index", {titulo: "Veterinaria"});
});

router.get('/userNotFound', (request, response) => {
    response.render("index", {titulo: "Email no encontrado :("});
});

router.get('/passwordNotFound', (request, response) => {
    response.render("index", {titulo: "Contraseña erronea :("});
});

module.exports = router;