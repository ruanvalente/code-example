import { Router } from 'express'
import { uuid } from 'uuidv4'
import { startOfHour, parseISO, isEqual } from 'date-fns'

interface Appointments {
  id: string
  provider: string
  date: Date
}

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

  const appointment = {
    id: uuid(),
    provider,
    date: parserDate,
  }
  appointments.push(appointment)
  return response.json(appointment)
})
export default appointmentsRouter
