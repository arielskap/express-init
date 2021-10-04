import { Response } from 'express'

interface ResponseNetwork {
  res: Response,
  statusCode: number
  message: string
  data?: any
}

export const response = ({ res, statusCode, message, data }: ResponseNetwork) => {
  res.status(statusCode || 500)
  res.json({
    success: false,
    message: message,
    data
  })
}
