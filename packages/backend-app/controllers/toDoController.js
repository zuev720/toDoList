const path = require("path");
const { Tasks } = require("../models/tasksModel");
// const ApiError = require('../error/ApiError');

class ToDoController {
  async create(req, res, next) {
    try {
      const obj = req.body;
      const task = {
        user_name: obj.user_name,
        user_email: obj.user_email,
        action: obj.user_email,
        status: 0,
      };
      await Tasks.create(task);
      return res.json("Task created successfully!");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  
  async editTask(req, res, next) {
    try {
      const obj = req.body;

      const task = await Tasks.findOne({
        where: Number(obj.id),
      });

      task.action = obj.action;
      task.status = obj.status;
      task.save();

      return res.json("Task edited successfully!");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const tasks = await Tasks.findAll();
    return res.json(tasks);
  }

  async getTask(req, res) {
    const { id } = req.params;
    const task = await Tasks.findOne({
      where: Number(id),
    });
    return res.json(task);
  }
  
  async deleteTask(req, res) {
    const { id } = req.params;
    const task = await Tasks.findOne({
      where: Number(id),
    });
    task.destroy();
    return res.json('Task deleted successfully');
  }
}

module.exports = new ToDoController();
