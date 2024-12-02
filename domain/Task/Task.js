class Task {
	constructor(id, title, description, categoryId, completed = false) {
	  this.id = id;
	  this.title = title;
	  this.description = description;
	  this.categoryId = categoryId;
	  this.completed = completed;
	}
  }
  
  module.exports = Task;
  