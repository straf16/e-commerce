const http = require('http')
const app = require('../app')

const PORT = 3000
const server = http.createServer(app)

server.listen(PORT, (_) => console.log('server running on port ' + PORT))