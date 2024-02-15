const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({message: "hello word"})
})

app.get('/produto', (req, res) => {
    res.json({message: "socorro"})
  })

app.listen(port, () => {
  console.log(`o servidor está rodando em ${port}`)
})