import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Create Schema
const TestSchema = new Schema({
   
    id: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
});

module.exports = Test = mongoose.model("test", TestSchema,'test');