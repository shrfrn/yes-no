const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const http = require('http').createServer(app)

app.use(express.json())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
    app.use(cors())
} else {
    const corsOptions = {
        origin: [
            'http://127.0.0.1:8080', 'http://localhost:8080',
            'http://127.0.0.1:3030', 'http://localhost:3030',
            'http://127.0.0.1:3000', 'http://localhost:3000'
        ],
        credentials: true
    }
    app.use(cors())
}

const yesnoRoutes = require('./api/yes-no/yes-no.routes')


app.use('/api/yes-no', yesnoRoutes)

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const logger = require('./services/logger.service')
const port = process.env.PORT || 3030

http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
})