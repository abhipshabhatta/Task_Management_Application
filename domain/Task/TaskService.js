const { readDB, writeDB } = require('../../infrastructure/db');

class TaskService {
  static getAllTasks() {
    return readDB().tasks || [];
  }

  static createTask(title, description, categoryId) {
    const tasks = this.getAllTasks();
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      categoryId,
      completed: false,
    };
    tasks.push(newTask);
    writeDB({ tasks });
    return newTask;
  }
}

module.exports = TaskService;
