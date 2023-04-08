const path = require('path');
const { Tasks } = require('../models/tasksModel');
// const {Device, DeviceInfo} = require('../models/models')
// const ApiError = require('../error/ApiError');

class ToDoController {
    async create(req, res, next) {
        try {
            const obj = req.body;
            const task = {
              user_name: obj.user_name,
              user_email: obj.user_email,
              action: obj.user_email,
              status: 0
            }
            await Tasks.create(task);
            return res.json('Task creted successfully!');
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }

    async getAll(req, res) {
        const tasks = await Tasks.findAll();
        return res.json(tasks);
    }

    async getOne(req, res) {
        // const {id} = req.params
        // const device = await Device.findOne(
        //     {
        //         where: {id},
        //         include: [{model: DeviceInfo, as: 'info'}]
        //     },
        // )
        return res.json('Hello One')
    }
}

module.exports = new ToDoController()