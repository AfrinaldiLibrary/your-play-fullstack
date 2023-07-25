const db = require('../models')
const Video = db.videos

exports.getAllData = async (req, res) => {
    try {
        const allData = await Video.find({}, {
            _id: 1,
            url_img: 1
        });
        res.status(200).json(allData);
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}