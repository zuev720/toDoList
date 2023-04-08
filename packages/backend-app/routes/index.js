const Router = require('express')
const router = new Router()
const toDoRouter = require('./toDoRouter')

// router.use('/user', userRouter)
router.use('/toDo', toDoRouter)

module.exports = router