import express from "express";
import mainRoutes from "./routes/mainRoutes.js";

const app = express();
app.use(express.json());
app.use("/api", mainRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
