const express = require('express')
const { log } = require('../../middlewares/logger.middleware')
const { yesno } = require('./yes-no.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, yesno)
// router.get('/:id', getCarById)
// router.post('/', requireAuth, requireAdmin, addCar)
// router.put('/:id', requireAuth, requireAdmin, updateCar)
// router.delete('/:id', requireAuth, requireAdmin, removeCar)

module.exports = router