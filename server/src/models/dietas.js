const { ObjectId } = require("mongodb");
const { Schema, model } = require("mongoose");

const dietaUserSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const dietaDiaSchema = new Schema({
  dieta: ObjectId,
  dia: String,
  desayuno: String,
  colacionM: String,
  comida: String,
  colacionT: String,
  cena: String,
});

const dietaSchema = new Schema({
  user: ObjectId,
  dias: [
    {
      dia: String,
      desayuno: String,
      colacionM: String,
      comida: String,
      colacionT: String,
      cena: String,
    },
  ],
});

const UserDieta = model("UserDieta", dietaUserSchema);

const Dieta = model("Dieta", dietaSchema);
const Dia = model("Dia", dietaDiaSchema);

(async () => {
  let res = await Dieta.findOne({
    user: "5ffbd63e17a9e255a8410380",
  });

  console.log(res.dias);

  const newDieta = await Dieta({
    user: "5ffbd63e17a9e255a8410380",
    dias: [
      {
        dia: "Lunes",
        desayuno: "Cereal",
        colacionM: "Leche",
        comida: "Carne",
        colacionT: "Coca",
        cena: "Arroz",
      },
      {
        dia: "Martes",
        desayuno: "Cereal",
        colacionM: "Leche",
        comida: "Carne",
        colacionT: "Coca",
        cena: "Arroz",
      },
      {
        dia: "Martes",
        desayuno: "Cereal",
        colacionM: "Leche",
        comida: "Carne",
        colacionT: "Coca",
        cena: "Arroz",
      },
    ],
  });
  await newDieta.save().catch((e) => console.log(e));
})();
