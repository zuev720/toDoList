const Router = require('express')
const router = new Router()
const toDoController = require('../controllers/toDoController')

router.post('/', toDoController.create)
router.get('/', toDoController.getAll)
router.get('/:id', toDoController.getOne)

module.exports = router