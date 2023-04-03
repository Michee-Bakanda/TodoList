const toDoModel = require('../models/ToDoModels')

module.exports.getToDo = async(req, res) =>{
    const toDo = await toDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async(req, res) =>{
    const {text} = req.body
    
    toDoModel
    .create({text})
    .then((data)=>{
        console.log("added successfully...")
        console.log(data)
        res.send(data)
    })
}

module.exports.updateToDo = async(req, res) =>{
    const {_id,text} = req.body
    
    toDoModel
    .findByIdAndUpdate(_id, {text})
    .then(()=> res.send("added successfully..."))
    .catch((err)=> console.log(err))
}

module.exports.deleteToDo = async(req, res) =>{
    const {_id} = req.body
    
    toDoModel
    .findByIdAndDelete(_id)
    .then(()=> res.send("deleted successfully..."))
    .catch((err)=> console.log(err))
}