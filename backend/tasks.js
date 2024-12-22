const express = require('express');
const Task = require('../models/task');
const router = express.Router();

// GET all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
});

// POST a new task
router.post('/', async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
