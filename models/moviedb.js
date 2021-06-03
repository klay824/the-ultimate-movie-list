const mongoose = require('mongoose');
const Schema = mongoose.Schema
var moviedb = new Schema({
    title: String,
    description: String,
    movieTitle: String
});
module.exports = mongoose.model("movie", movieSchema);