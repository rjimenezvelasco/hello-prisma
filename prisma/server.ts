import { PrismaClient } from '@prisma/client'
import express from 'express'
var cors =require('cors')

const prisma = new PrismaClient()
const app = express()


app.use(cors())

app.use(express.json())

// Aqui estan las rutas

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
  })

  app.post(`/user`, async (req, res) => {
    const { email,name } = req.body
    const result = await prisma.user.create({
      data: {
        email,
        name
      },
    })
    res.json(result)
  })
  

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)
