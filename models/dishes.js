const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating:{
        type:Number,
        required:true,
        max:5,
        min:0
    },
    comments:{
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

const dishSchema = new Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true
    },
    comments : [commentSchema]
},

    {
        timestamps : true
    }
);

var Dishes = mongoose.model('Dish',dishSchema);

module.exports = Dishes;
