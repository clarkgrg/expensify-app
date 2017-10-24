const address = ['1299 S Juniper Street', 'Philedelphia', 'Penn', '19147'];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}`);
// const person = {
//     name: 'Andrew',
//     age: 29,
//     location: {
//         city: 'Waukee',
//         temp: 72
//     }
// };
//
// const {name = 'Anonymous', age} = person;
// console.log(`${name} is ${age}`);
//
// const {city, temp: temperature} = person.location;
// if (city && temperature) {
// console.log(`It's ${temperature} in ${city}`);
// }
