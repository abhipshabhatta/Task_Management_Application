const { readDB, writeDB } = require('../../infrastructure/db');

class CategoryService {
  static getAllCategories() {
    return readDB().categories || [];
  }

  static createCategory(name) {
    const categories = this.getAllCategories();
    const newCategory = { id: categories.length + 1, name };
    categories.push(newCategory);
    writeDB({ categories });
    return newCategory;
  }
}

module.exports = CategoryService;
