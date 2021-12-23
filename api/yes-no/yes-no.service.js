const logger = require('../../services/logger.service')
const gAnswers = require('../../data/yesno.json')

function yesno() {
    const idx = Math.floor(Math.random() * gAnswers.length)
    return gAnswers[idx]
}
module.exports = {
    yesno,
}