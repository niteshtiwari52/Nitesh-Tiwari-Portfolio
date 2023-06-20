const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json()); //to accept json data
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to PortFolio Server",
  });
});

app.use("/api/v1/contact", contactRoutes);

// PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is Running on PORT: http://localhost:${PORT}`);
});
