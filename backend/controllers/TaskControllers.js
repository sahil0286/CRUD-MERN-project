const TaskModel = require('../models/TaskModel');

module.exports.getTask= async (req, res) => {
    const tasks = await TaskModel.find();
    res.send(tasks);
};

