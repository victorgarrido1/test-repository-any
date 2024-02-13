const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/config.json');


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on ${PORT}`);
    });
});