const path = require('path');
const { Tasks } = require('../models/tasksModel');
// const {Device, DeviceInfo} = require('../models/models')
// const ApiError = require('../error/ApiError');

class ToDoController {
    async create(req, res, next) {
        try {
            // let {name, price, brandId, typeId, info} = req.body
            // const {img} = req.files
            // let fileName = uuid.v4() + ".jpg"
            // img.mv(path.resolve(__dirname, '..', 'static', fileName))
            // const device = await Device.create({name, price, brandId, typeId, img: fileName});

            // if (info) {
            //     info = JSON.parse(info)
            //     info.forEach(i =>
            //         DeviceInfo.create({
            //             title: i.title,
            //             description: i.description,
            //             deviceId: device.id
            //         })
            //     )
            // }

            return res.json('Hello Igor POST')
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        const tasks = await Tasks.findAll();
        console.log(tasks);
        return res.json(tasks)
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