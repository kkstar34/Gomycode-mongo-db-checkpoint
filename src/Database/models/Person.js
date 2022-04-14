import mongoose from 'mongoose';

const PersonSchema = new mongoose.Schema({
    name : { type : 'string', required: true},
    age : { type : 'number'},
    favoriteFoods : [String]
})

const Person = mongoose.model('person', PersonSchema);

export default Person;