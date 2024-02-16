import express from 'express'
import {PORT, HOST} from './config.js'
import {users} from './db-memory/user.js'


const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({message: "hello word"})
})

app.get('/produto', (req, res) => {
    res.json({message: "caixa de leite"})
})

app.get('/user', (req, res) => {
  res.json({
    success: "usuarios listados com sucesso",
    users
  })
})

app.post('/user', (req, res) => {
  const user = req.body
  user.id = users[users.length - 1].id + 1
  users.push(user)
  console.log(user)
  res.json({
    success: "usuarios listados com sucesso",
    users
  })
})

app.listen(PORT, () => {
  console.log(`o servidor está rodando em ${HOST}:${PORT}`)
})