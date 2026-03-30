const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.get('/todos', (req, res) => {
  Todo.find({}).then((data) => res.json(data));
});

router.post('/todos', (req, res) => {
  if (req.body.action) {
    Todo.create(req.body).then((data) => res.json(data));
  } else {
    res.json({
      error: 'The input field is empty'
    });
  }
});

router.patch('/todos/:id', (req, res, next) => {
  const updatedFields = req.body; // expects the full object or fields to update

  Todo.findOneAndUpdate(
    { _id: req.params.id }, // find by ID from URL
    updatedFields, // update with the fields sent in body
    { new: true } // return the updated document
  )
    .then((updatedTodo) => res.json(updatedTodo))
    .catch(next);
});
router.delete('/todos/:id', (req, res, next) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
