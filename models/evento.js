import mongoose from "mongoose";
const Schema = mongoose.Schema;

const eventoSchema = new Schema({
  nombreEvento: {
    type: String,
    required: [true, "Nombre del evento es obligatorio"],
  },
  diaEvento: { type: Date, default: Date.now },
  descEvento: String,
  eventoID: String,
  statusEvento: { type: Boolean, default: true },
});

// Convertir a modelo
const Evento = mongoose.model("evento", eventoSchema);
export default Evento;
