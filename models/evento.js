import mongoose from "mongoose";
const Schema = mongoose.Schema;

const eventoSchema = new Schema({
  nombreEvento: {
    type: String,
    required: [true, "Nombre del evento es obligatorio"],
  },
  diaEvento: { type: Date, default: Date.now },
  diaEvento2: { type: Date, default: Date.day },
  descEvento: String,
  eventoID: String,
  statusEvento: { type: Boolean, default: true },
});

// Convertir a modelo
const evento = mongoose.model("evento", eventoSchema);
export default evento;
