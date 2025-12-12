import express, { application } from "express";
import cors from "cors";
import { db } from "./dbconnections.js";

const app = express();
app.use(express.json());
app.use(cors());

// const PORT = 8080;

// app.listen(PORT, () => {
//   console.info(`Server is running in port ${PORT}`);
// });

app.get("/", (request, response) =>
  response.json({ message: "Welcome to the server!" })
);

//TODO: a route to CREATE data in the database
app.post("/reviews", (request, response) => {
  const reviewForm = request.body.formValues;
  const query = db.query(
    `INSERT INTO hotelreviews (name, location, date, comments) VALUES ($1, $2, $3, $4)`,
    [reviewForm.name, reviewForm.location, reviewForm.date, reviewForm.comments]
  );
  response.json({ staus: "success", values: reviewForm });
});

//TODO: a route to READ data from the database
