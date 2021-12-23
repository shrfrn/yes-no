const yesnoService = require('./yes-no.service.js');
const logger = require('../../services/logger.service')

function yesno(req, res) {
    const ans = yesnoService.yesno()
    res.json(ans);
}
module.exports = {
  yesno,
}
