import express from 'express'

const routerTest = express.Router()

routerTest.get('/', function (req, res, next) {
  res.json({ hola: 'como estas?' })
})

routerTest.post('/', function (req, res, next) {
  res.json({ hola: 'como estas? post' })
})

export default routerTest
