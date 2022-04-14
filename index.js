
import Database from './src/Database/Database.js';
import Person from './src/Database/models/Person.js';

let db = new Database();

// let person = new Person({
//     name : 'Ngatia Eric',
//     age : 21,
//     favoriteFoods : ['foutou ', 'Sauce graibe']
// });
// person.name = 'Kouyate Karim';
// person.age = 23;
// person.favoriteFoods = ['foutou banane', 'Garba'];


// Person.create([
//     {
//      name : 'Yoyo 225',
//     age : 20,
//     favoriteFoods : ['Chill ', 'Sauce graibe']
//     },

//     {
//         name : 'Raoul Soga',
//        age : 21,
//        favoriteFoods : ['foutou ', 'Sauce graibe']
//        }
// ]);

// person.save().then((person) => {
//     console.log(person);
// })


// get all people

// Person.find().then((people) => {
//     console.log(people);
// })

// get single person based on food

// Person.findOne({favoriteFoods : 'Chill '}).then((person) => {console.log(person);});

// get person by id

let id = "6258060b97ac2fe713f6c043";
Person.findById(id)
        .then((person) => {
            console.log(person);
        })