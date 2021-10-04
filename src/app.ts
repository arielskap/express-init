import express, { NextFunction, Request, Response } from 'express'
import logger from 'morgan'
import createError from 'http-errors'
import routes from './routes'
import dotenv from 'dotenv'
import { response } from './helpers/network'

dotenv.config()

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

routes.forEach(route => {
  app.use(route.path, route.routes)
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message
  res.locals.error = process.env.NODE_ENV === 'development' ? err : {}
  response({ res, statusCode: err.status, message: err.message })
})

export default app
