import express from "express";
import notesRoutes from "./routes/notes.routes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use("/api/notes", notesRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`Server started on: http://localhost:${PORT}`);
});