const mongoose=require('mongoose');

const noteSchema= mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength: 5, 
    },
    content:{
        type:String,
        required:true,
        minlength: 10, 
    },
    createdAt:{
      type:Date,
    },
    updatedAt:{
      type:Date,
    }
})


module.exports= mongoose.model('Note',noteSchema);