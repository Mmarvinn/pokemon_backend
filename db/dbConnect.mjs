import mongoose from 'mongoose';

const dbConnect = () => {
  const MONGO_URL = process.env.MONGO_URL;

  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log('the Database connection successfully');
    })
    .catch((err) => {
      console.log('the Database not connected', err);
    });
};

export default dbConnect;
