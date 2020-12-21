"use strict";
// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)

// let json = JSON.stringify(["apple", "banana"]);
// console.log(json);

const people = {
  name: "hyunjoo",
  age: 35,
  height: 186,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump`);
  },
};

// {
//   let json = JSON.stringify(people, (key, value) => {
//     console.log(`key: ${key}, value: ${value}`);
//     return key === "name" ? "ellie" : value;
//   });
//   console.log(json);
// }

const json = JSON.stringify(people);
console.log(json);

// 2. JSON to Object
// parse(json)

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
console.log(people.birthDate.getDate());
console.log(obj.birthDate.getDate());
