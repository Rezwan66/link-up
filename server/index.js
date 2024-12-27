const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
// const cors = require('cors');
const port = process.env.PORT || 3001;
const db = require('./models');

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`LinkUp Server is running on port ${port}`);
    });
});
