const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()
const PORT = process.env.PORT || 8005

const dbConnect = require('./config/database')
dbConnect()

app.use(cors())
app.use(express.json())

const todoRouter = require('./routes/todos')
app.use('/api/v1', todoRouter)

app.get('/', (req, res) => {
  res.json({ message: 'TODO API is running!', version: '1.0' })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
