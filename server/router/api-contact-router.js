const express = require('express')
const router = new express.Router()
const {
  listContactHandler,
  findContactById,
  createContactHandler,
  updateContactHandler,
  deleteContactHandler
} = require('../modules/contact')

router.get('/', listContactHandler)

router.get('/:id', findContactById)

router.post('/', createContactHandler)

router.put('/', updateContactHandler)

router.delete('/:id', deleteContactHandler)

module.exports = router



