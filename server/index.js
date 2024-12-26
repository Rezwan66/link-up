const express = require('express');
const app = express();
// require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send("LinkUp Server is Running...");
});

app.listen(port, () => {
    console.log(`LinkUp Server is running on port ${port}`);
});
