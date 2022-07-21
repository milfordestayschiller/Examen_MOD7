const mongoose = require('mongoose');
const express = require("express");

const app = express();

require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Datos para la conexión a MongoDB
const user = 'droflim';
const password = 'master666';
const dbname = 'empresa';

const uri = `mongodb+srv://${user}:${password}@cluster0.9swkajv.mongodb.net/${dbname}?retryWrites=true&w=majority`;
console.log("uri", uri);
// Me conecto a MongoDB
mongoose.connect(uri,
    {
        useNewUrlParser: true, useUnifiedTopology: true
    }
)
    .then(() => console.log("Base de datos conectada"))
    .catch(e => console.log(e))


// Motor de plantillas, definición de rutas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

// Importación de router
const authRoutes = require('./router/auth')

// Código de los router
app.use('/api/user', authRoutes);

// Especificación de las rutas a ocupar
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/ClientesRouter'));


app.use('/user', require('./router/auth'))

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

