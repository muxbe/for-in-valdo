const car = {
  manufacturer: `Ferrari`,
  model: `La Ferrari`,
  color: `Red`,
  year: `2012`,
  price: 1000000,
};
for (const property in car) {
  console.log(`maxasiatebeli: ${property}, agwera: ${car[property]}`);
}
const lamborgini = [
  "lamborgini",
  "el matador",
  "yellow",
  2020,
  20000000,
  [2, { tvali: `hei` }],
];
for (i = 0; i < lamborgini.length; i++) {
  console.log(`shesaxeb:${lamborgini[i]};
  `);
}
for (const shesaxeb of lamborgini) {
  console.log(lamborgini[5][1].tvali);
}
