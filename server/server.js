require('dotenv').config();
require('./config/mongoose.config'); 

const cors = require('cors')
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(cors(), express.json(), express.urlencoded({extended:true}));

// link to routes
require('./routes/author.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );