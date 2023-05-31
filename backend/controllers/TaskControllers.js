const TaskModel = require('../models/TaskModel');

module.exports.getTask= async (req, res) => {
    const tasks = await TaskModel.find();
    res.send(tasks);
};

module.exports.saveTask=  (req, res) => {
    const { task } = req.body;

    TaskModel.create({ task })
    .then((data)=>{
        console.log("Task Saved successfully")
        res.status(201).send(data);
    })
    .catch((err) => {
        console.log(err);
        res.send({ error : err, msg: "Task failed to Saved"});
    });
};

