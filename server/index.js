const express = require("express");
const cors = require("cors");
const blogRouter = require("./route/blog-route");

require("./db");

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`[SERVER] ${req.method} ${req.url}`);
  next();
});


app.use("/api/blogs", blogRouter);

app.use("/api", (req, res) => {
  res.status(200).json({message : "Hello World"});
});

const PORT = 5050;
app.listen(PORT, () => console.log(`App is running at ${PORT}...`));


app.use((req, res) => {
  console.log("[SERVER] Reached fallback", req.method, req.url);
  res.status(404).json({ message: "Not Found in Express" });
});
