const Router = require('express')
const router = new Router()
const toDoController = require('../controllers/toDoController')

router.post('/', toDoController.create);
router.post('/edit', toDoController.editTask);
router.get('/', toDoController.getAll);
router.get('/:id', toDoController.getTask);
router.delete('/delete/:id', toDoController.deleteTask);

module.exports = router