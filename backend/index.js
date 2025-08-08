const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/name", (req, res) => {
  res.json({ name: "Cephas Okuku" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
