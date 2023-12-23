
import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Create Schema
const MovieSchema = new Schema({

    id: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    image: String,
    new_epp: String,
    overview: String,
    poster_path: String,
    title: String,
    type: String,
    updateAt: Number,
    ref: Array
});

let Movie = global.movie_schema;
if (!global.movie_schema) {
    Movie = mongoose.model("movie", MovieSchema, 'movie');
    global.movie_schema = Movie;
}


module.exports = Movie