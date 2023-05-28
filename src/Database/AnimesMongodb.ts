import mongoose from "mongoose";
import "dotenv/config";

const InitMongoose = () => {
  mongoose.connect(process.env.URL_MONGODB || "", { dbName: "Animes" });
};

export default InitMongoose;
