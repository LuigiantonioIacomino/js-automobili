let arrayAutoBenzina = [];
let arrayAutoDiesel = [];
let restoAuto = [];

let arrayAutoTotale = [
  {
    marca: "Fiat",
    modello: "Punto",
    alimentazione: "Benzina",
  },
  {
    marca: "Alfa Romeo",
    modello: "Giulietta",
    alimentazione: "Diesel",
  },
  {
    marca: "Skoda",
    modello: "Fabia",
    alimentazione: "Elettrica",
  },
  {
    marca: "Porsche",
    modello: "Carrera",
    alimentazione: "Ibrida",
  },
  {
    marca: "Ford",
    modello: "Fiesta",
    alimentazione: "Gpl",
  },
  {
    marca: "Bmw",
    modello: "Z1",
    alimentazione: "Gpl",
  },
  {
    marca: "Audi",
    modello: "A8",
    alimentazione: "Diesel",
  },
  {
    marca: "Ford",
    modello: "Fiesta",
    alimentazione: "Gpl",
  },
  {
    marca: "Honda",
    modello: "Pinco",
    alimentazione: "Benzina",
  },
  {
    marca: "Lamborghini",
    modello: "Urus",
    alimentazione: "Benzina",
  },
];



arrayAutoTotale.forEach(function(element) {
if(element.alimentazione=="Benzina") {
    arrayAutoBenzina.push(element);
}
else if(element.alimentazione=="Diesel") {
    arrayAutoDiesel.push(element);
}

else {
    restoAuto.push(element);
}
})

console.log(arrayAutoBenzina)
console.log(arrayAutoDiesel)
console.log(restoAuto)
