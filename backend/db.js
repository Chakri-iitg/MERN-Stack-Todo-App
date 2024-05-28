
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://chakravarthichitturi:<password>@cluster0.q7tgkb4.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description:String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports({
    todo
})
