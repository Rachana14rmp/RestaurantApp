import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter your first name'],
    minLength: [3, 'First name must be at least 3 characters'],
    maxLength: [50, 'First name must not exceed 50 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Please enter your first name'],
    minLength: [3, 'Last name must be at least 3 characters'],
    maxLength: [50, 'Last name must not exceed 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    validator: [validator.isEmail, 'Please enter a valid email'],
  },
  phone: {
    type: String,
    required: [true, 'Please enter your phone number'],
    minLength: [10, 'Phone number must be 10 characters'],
    maxLength: [10, 'Phone number must be 10 characters'],
  },
  time: {
    type: String,
    required: [true, 'Please enter the time of reservation'],
  },
  date: {
    type: String,
    required: [true, 'Please enter the date of reservation'],
  },
});
export const Reservation = mongoose.model('Reservation', reservationSchema);
