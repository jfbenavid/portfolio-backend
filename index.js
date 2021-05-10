const express = require('express')
const cors = require('cors')

const config = require('./config')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'cool!!!' })
})

app.listen(config.port)
console.log(`Server running on http://localhost:${config.port}`)
