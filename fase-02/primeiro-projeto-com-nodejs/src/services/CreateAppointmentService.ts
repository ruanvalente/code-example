import { startOfHour } from 'date-fns'

import Appointments from '../models/Appointments'
import AppointmentsRepository from '../repositories/AppointmentsRepository'

interface Request {
  provider: string
  date: Date
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository

  constructor (appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository
  }

  public execute ({ provider, date }: Request): Appointments {
    const appointmentDate = startOfHour(date)
    const findAppointmentsInSameDate = this.appointmentsRepository.findByDate(
      appointmentDate,
    )

    if (findAppointmentsInSameDate) {
      throw Error('This appointment is already booked')
    }
    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    })

    return appointment
  }
}

export default CreateAppointmentService
