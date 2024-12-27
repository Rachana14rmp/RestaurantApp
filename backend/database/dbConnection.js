import mongoose, { mongo } from 'mongoose';

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: 'RESTAURANT',
    })
    .then(() => {
      console.log('Database connected successfully');
    })
    .catch((err) => {
      console.log('Error occured while connecting to database', err);
    });
};
