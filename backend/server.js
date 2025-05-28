import express from "express";
import notesRoutes from "./src/routes/notes.routes.js";

const app = express();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
    console.log("Server started on: http://localhost:5001");
});