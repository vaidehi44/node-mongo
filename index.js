const mongoose = require('mongoose');
const Dishes =  require('./models/dishes');

const url = 'mongodb://localhost:27017/Confusion';

const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Connected successfully.');

    var newDish = Dishes({
        name:'Puranpoli',
        description:'tasty'
    });
    newDish.save()
        .then((dish) => {
            console.log('Saved the dish:\n',dish);

            return Dishes.find({});
        }).then((dishes) => {
            console.log('Found:\n',dishes);

            return mongoose.connection.close();
        }).catch((err) => {
            console.log(err);
        })
}).catch((err) => console.log(err));