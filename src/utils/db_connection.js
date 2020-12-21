import mongoose from 'mongoose';

const url = "mongodb+srv://daskh:Daksh1998@cluster0.irsba.mongodb.net/postAPI?retryWrites=true&w=majority"
export default async (db) => {
  try {
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  // console.log(conn); 
    return conn;
  } catch (err) {
    throw new Error('MongoDB connection err: ' + err);
  }
};
