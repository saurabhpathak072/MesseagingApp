const mongoose = require("mongoose");
const connectDB =  () => {
   mongoose.connect(
    process.env.MONGO_DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "Mongo DB connection error"));
  db.once("open", () => {
    console.log("connected to DB");
  });
};

module.exports = {
  connectDB,
};
