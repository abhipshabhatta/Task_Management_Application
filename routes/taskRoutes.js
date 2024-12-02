const express = require('express');
const router = express.Router();
const TaskService = require('../domain/Task/TaskService');
const taskValidation = require('../middleware/taskValidation');

// Get all tasks
router.get('/', (req, res) => {
  res.json(TaskService.getAllTasks());
});

// Create a new task
router.post('/', taskValidation, (req, res) => {
  const { title, description, categoryId } = req.body;
  const task = TaskService.createTask(title, description, categoryId);
  res.status(201).json(task);
});

module.exports = router;
