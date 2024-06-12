const express = require('express')
const app = express()
const mongoose = require('./database/mongoose.js')
const Task = require('./database/models/task.js')
const List = require('./database/models/list.js')
const cors = require('cors')

//enable CORS 

app.use(cors());

app.use(express.json())


// get all lists
app.get('/lists', (req, res)=>{
  List.find({}).then(item => {
    res.send(item)
  }).catch(err => {
    if (err){
      console.log(err)
    }
  })
})

// create a list
app.post('/lists', (req, res)=>{
  new List({
    'title': req.body.title
  }).save().then(list => {
    res.send(list)
  }).catch(err => {
    if (err){
      console.log(err)
    }
  })
})

// get one list
app.get('/lists/:listId', (req, res)=>{
  List.find({ _id: req.params.listId}).then(data => {
    res.send(data)
  }).catch(err => {
    if (err){
      console.log(err)
    }
  })
})

// delete one list
app.delete('/lists/:listId', (req, res)=>{
  List.deleteOne({_id: req.params.listId}).then(data => {
    res.send(data)
  }).catch(err => {
    if (err){
      console.log(err)
    }
  })
})

//update Single List 
app.patch('/lists/:listId', (req, res)=>{
List.findOneAndUpdate({'_id': req.params.listId}, {$set: req.body}).then(data => {
  res.send(data)
}).catch(err => {
  if (err){
    console.log(err)
  }
})
})


// get all tasks for a specific list
app.get('/lists/:listId/tasks', (req, res)=>{
  Task.find({ _listId: req.params.listId}).then(data => {
    res.send(data)
  }).catch(err => {
    if (err){
      console.log(err)
    }
  })
})

// add a task to a specific list
app.post('/lists/:listId/tasks', (req, res)=>{
  new Task({
    title: req.body.title,
    _listId: req.params.listId,
    completed: false,
  }).save().then(data => {
    res.send(data)
  }).catch(err => {
    console.log(err)
  })
})

// updadate a task
app.patch('/lists/:listId/tasks/:taskId', (req, res)=>{
  Task.findOneAndUpdate({_listId: req.params.listId}, {$set: {title: req.body.title, completed: req.body.completed}}).then(data => {
    res.send(data)
  }).catch(err => {
    if (err){
      console.log(err)
    }
  })
})

//delete a task
app.delete('/lists/:listId/tasks/:taskId', (req, res)=>{
  Task.findOneAndDelete({_listId: req.params.listId, _id: req.params.taskId}).then(data =>{
    res.send(data)
  }).catch(err => {
    console.log(err)
  })
})


app.listen(2000, ()=>{
  console.log('server running at localhost:2000')
})