const express = require("express");
const app = express();
const applicationRoutes = require("./routes/applicationRoutes");
require("./db");

app.use(express.json());

// Use application routes
app.use("/api/applications", applicationRoutes);

app.get("/", (req, res) => {
    res.send("ApplyTrack backend is running");
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`);
});