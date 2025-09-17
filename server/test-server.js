const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from test server" });
});

app.listen(5000, () => console.log("✅ Test server running on http://localhost:5000"))
