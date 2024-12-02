const taskValidation = (req, res, next) => {
    const { title, description, categoryId } = req.body;
    if (!title || !description || !categoryId) {
      return res.status(400).json({ error: 'Title, description, and categoryId are required.' });
    }
    next();
  };
  
  module.exports = taskValidation;
  