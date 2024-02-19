const { logEvents } = require('./logger')

const errorHander = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
    console.log(err.stack)    

    const status = res.statusCode ? res.statusCode : 500 //sever error

    res.status(status)

    res.json({ message: err.message })
}

module.exports = errorHander;