const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title:{
        type:String,
        required: true,
        minLength: 5,
        maxLength: 20,
    },
    status:{
        type: String,
        required:false,
        default: "to-do"
    },
    tages:{
        type: String,
        maxLength: 10
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const toDo = mongoose.model('toDo' , todoSchema)
toDo.createIndexes({title:1})
module.exports= toDo