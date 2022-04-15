require('./patcher') // Llamas este módulo que modifica el objeto instanciado
const logger = require('./logger') // Al llamar el módulo en logger.js te dará el objeto modificado
const logger_class = require('./logger').Logger

logger.customMessage()

console.log(logger)
console.log(logger_class)