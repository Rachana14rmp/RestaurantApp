import ErrorHandler from '../error/error.js';
import { Reservation } from '../models/reservationSchema.js';

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, time, date } = req.body;
  if (!firstName || !lastName || !email || !phone || !time || !date) {
    return next(new ErrorHandler('Please Fill Full Reservation Form!', 400));
  }
  try {
    await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      time,
      date,
    });
    res.status(201).json({
      success: true,
      message: 'Reservation sent successfully',
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const validationErrors = Object.values(err.errors).map(
        (value) => value.message
      );
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }
    return next(err);
  }
};
