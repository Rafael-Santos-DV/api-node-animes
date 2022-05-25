import mongoose from 'mongoose';
import 'dotenv/config';

const InitMongoose = () => {
  mongoose.connect(process.env.URL_MONGODB || '', (error) => {
    if (error) {
      throw new Error('connect error');
    }
    console.log('db on');
  });
};

export default InitMongoose;
