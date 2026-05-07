const express = require("express");
const app = express();

// Middleware
app.use(express.json()); 

// Test route
app.get("/", (req, res) => {
    res.send("ApplyTrack backend is running");
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`);
});