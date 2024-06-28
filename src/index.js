import { app } from "./app.js";
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });

    app.on("error", (error) => {
      console.log("ERROR in app !!! ", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log(`MONGO db connection failed !!! ${err}`);
  });

/*
// 1st method
const app = express()(async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
    );

    app.on("error", () => {
      console.log("ERRR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
})();
*/
