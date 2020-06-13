const express = require('express')
const path = require('path')

const staticPath = path.resolve(__dirname, '../../dist')

const router = new express.Router()
const apiContactRouter = require('./api-contact-router')

router.use('/', express.static(staticPath))

router.use('/api/contact', apiContactRouter)

module.exports = router