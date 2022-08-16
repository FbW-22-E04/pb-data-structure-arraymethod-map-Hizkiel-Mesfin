//#1
function camelize(str) {
  return str
    .split("-")
    .map((el, i) => {
      return i === 0 ? el.toLowerCase() : el[0].toUpperCase() + el.slice(1);
    })
    .join("");
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

//#2

const userArr = [
  { name: "John", surname: "Smith", id: 1 },
  { name: "Pete", surname: "Hunt", id: 2 },
  { name: "Mary", surname: "Key", id: 3 },
];

const usersMapped = userArr.map((el) => {
  return { fullName: el.name + " " + el.surname, id: el.id };
});

console.log(usersMapped);

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);
