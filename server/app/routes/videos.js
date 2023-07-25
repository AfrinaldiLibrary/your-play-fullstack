module.exports = (app) => {
    const videos = require('../controllers/videos')
    const router = require('express').Router()

    router.get('/', videos.getAllData)

    app.use('/api/videos', router)
}