import { Router } from 'express'
import { startOfHour, parseISO, isEqual } from 'date-fns'

import Appointments from '../models/Appointments'

const appointmentsRouter = Router()

const appointments: Appointments[] = []

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body

  const parserDate = startOfHour(parseISO(date))

  const findAppointmentsInSameDate = appointments.find(appointment =>
    isEqual(parserDate, appointment.date),
  )

  if (findAppointmentsInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' })
  }

  const appointment = new Appointments(provider, parserDate)
  appointments.push(appointment)
  return response.json(appointment)
})
export default appointmentsRouter
