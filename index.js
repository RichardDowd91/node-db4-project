require('dotenv').config()

const server = require("./api/server.js")

const port = process.env.PORT 

server.listen(port, () => console.log(`Api running on port ${port}`))