import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Create Schema
const EppSchema = new Schema({
    // _id: {
    //     type: mongoose.Schema.ObjectId,
    //     require: false
    // },
    id: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
  
    index: Number,
    link: Array,
    name: String,
    movie_id: String,
    type: {
        default: 'TM',
        type: String
    }
});


let Epp = global.ep_schema;
if (!global.ep_schema) {
    Epp = mongoose.model("epp", EppSchema, 'epp');
    global.ep_schema = Epp;
}


module.exports = Epp
