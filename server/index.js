const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3001;
const db = require('./models');

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);
const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`LinkUp Server is running on port ${port}`);
    });
});
