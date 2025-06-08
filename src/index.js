import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from 'dotenv';
dotenv.config();



connectDB()
  .then(() => {
    console.log("Database connected successfully");
    // handle error
    app.on('error', (err) => {
      console.error("Server error:", err);
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });

  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });
