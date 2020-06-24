import { Router } from 'express'
import { startOfHour, parseISO } from 'date-fns'

import AppointmentsRepository from '../repositories/AppointmentsRepository'

const appointmentsRouter = Router()
const appointmentsRepository = new AppointmentsRepository()

appointmentsRouter.get('/', (request, response) => {
  const appointment = appointmentsRepository.all()

  return response.json(appointment)
})
appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body
  const parserDate = startOfHour(parseISO(date))
  const findAppointmentsInSameDate = appointmentsRepository.findByDate(
    parserDate,
  )

  if (findAppointmentsInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' })
  }
  const appointment = appointmentsRepository.create({
    provider,
    date: parserDate,
  })
  return response.json(appointment)
})

export default appointmentsRouter
