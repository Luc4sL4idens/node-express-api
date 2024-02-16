import express from 'express'
import {PORT,HOST} from './config.js'

const app = express()

app.get('/', (req, res) => {
  res.json({message: "hello word"})
})

app.get('/produto', (req, res) => {
    res.json({message: "socorro"})
  })

app.listen(PORT, () => {
  console.log(`o servidor está rodando em ${HOST}:${PORT}`)
})