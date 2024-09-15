const express = require('express')

const router = express.Router()

const taskcontroller = require('./../controllers/tasks')

router
.route('/')
.get(taskcontroller.getAllTasks)
.post(taskcontroller.createTask)

router
.route('/:id')
.get(taskcontroller.getTask)
.patch(taskcontroller.updateTask)
.delete(taskcontroller.deleteTask)

module.exports = router