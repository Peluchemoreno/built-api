const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  _listId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
    required: true,
  }
})


const Task = mongoose.model('Task', TaskSchema)

module.exports = Task