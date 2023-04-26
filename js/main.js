"use strict";

const WELCOME_MESSAGE = `Hello World!`;

const output = document.querySelector('#js-output');
output.innerHTML = WELCOME_MESSAGE;

// const user = {
//   name: "Jan",
//   surname: "Kowalski",
//   email: "jan.kowalski@mail.com",
//   address: {
//     street: "Matejki",
//     number: 12,
//   },
//   hobbies: ['swimming', 'hiking'],
//   "class i co": "I co?"
// };

// console.log(user.name);
// console.log(user.email);
// console.log(user.address.street);
// console.log(user.hobbies[0]);
// user.hobbies.push('boxing');
// console.log(user.hobbies);

// const userName = user["class i co"];
// console.log(userName);
// console.log(user["email"]);
//
// const myProp = "hobbies";
// console.log(user[myProp]);

// user.email = "jan89@wp.pl";

// user.userType = "regular";
// user.languages = ["pl", "en"];
//
// console.log(user);

// const title = "Pan Tadeusz";
// const pages = 358;
//
// const book = {
//   title,
//   pages
// }
//
// console.log(book);

// const propName = "age";
//
// const user = {
//   name: "Jan",
//   surname: "Kowalski",
//   email: "jan.kowalski@mail.com",
//   address: {
//     street: "Matejki",
//     number: 12,
//   },
//   hobbies: ['swimming', 'hiking'],
//   [propName]: 45,
//   getName() {
//     return this.name;
//   },
//   sayHello(name) {
//     console.log(`Cześć ${name}`);
//   },
//   addHobby(hobby) {
//     this.hobbies.push(hobby);
//   },
//   getFullname() {
//     return this.name + ' ' + this.surname;
//   }
// };
//
// user.sayHello("Tomek");
//
// console.log(user.getName());
//
// user.addHobby('joga');
//
// console.log(user.hobbies);
//
// console.log(user.getFullname());

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
//
// for (const key in book) {
//   // Klucz
//   console.log(key);
//   // Wartość właściwości pod tym kluczem
//   console.log(book[key]);
// }

// const human = {
//   age: 30
// }
//
// const programmer = Object.create(human);
//
// programmer.languages = ["Python", "JavaScript"];
//
// // console.log(programmer);
// // console.log(programmer.age);
// // console.log(programmer);
//
// for (const key in programmer) {
//
//   if (programmer.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(programmer[key]);
//   }
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys);// ['title', 'author', 'genres', 'rating']
//
// // console.log(book[keys[0]]);
//
// const values = Object.values(book);
// console.log(values);
//
// const entries = Object.entries(book);
// console.log(entries);


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "Sen śmiesznego człowieka",
//     author: "Fiodor Dostojewski",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
// }

// let totalRating = 0;
//
// for (const book of books) {
//   totalRating += book.rating;
// }
//
// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2






