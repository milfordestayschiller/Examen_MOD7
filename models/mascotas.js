const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotasSchema = new Schema(
    {
        nombreMascota: String,
        razaMascota: String,
        fechaNacimientoMasdcota : String,
        nombreDueno : String
    }
);

// Crear el modelo

const Mascota = mongoose.model('mascotas', mascotasSchema);

module.exports = Mascota;

