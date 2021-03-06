const mongoose = require('mongoose');
const Dishes =  require('./models/dishes');

const url = 'mongodb://localhost:27017/Confusion';

const connect = mongoose.connect(url,{ useFindAndModify: false});

connect.then((db) => {
    console.log('Connected successfully.');

    Dishes.create({
        name:'Puranpoli',
        description:'tasty'
    })
    .then((dish) => {
            console.log('Created the dish:\n',dish);

            return Dishes.findByIdAndUpdate(dish._id,{
                $set:{description:'Updated test'}
            },
            {
                new : true         
            }
            ).exec();
    })
    .then((dish) => {
      
            console.log('Updated the dish as:\n',dish);

            dish.comments.push({
                rating : 5,
                comment: 'Great',
                author:'ME'
            })
            return dish.save()

    })
    .then((dish) => {
        console.log('Added the comments:\n',dish);
        return Dishes.find({}).exec();
    })
    .then((dishes) => {
        console.log('Found the dishes:\n',dishes);
        return Dishes.remove({});
    }).then(()=>{
        return mongoose.connection.close();
    })
    .catch((err) => {
            console.log(err);
        })
}).catch((err) => console.log(err));