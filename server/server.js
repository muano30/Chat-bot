const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const {chatRoutes} = require('./routes/chatRoutes')


app.use(express.json());
app.use(cors());

chatRoutes(app)

app.listen(port, console.log(`Example app listening on port ${port}!`));