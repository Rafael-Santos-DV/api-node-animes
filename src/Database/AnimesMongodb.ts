import mongoose from 'mongoose';

const InitMongoose = () => {
  mongoose.connect('mongodb://localhost:27017/animes', (error) => {
    if (error) {
      throw new Error('connect error');
    }
    console.log('db on');
  });
};

export default InitMongoose;
