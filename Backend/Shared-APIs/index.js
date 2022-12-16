const express = require('express'); 
const cors = require('cors');
const app = express();   
const landingRouter = require('./routers/landingpage.router');


app.use(cors({
    origin: true,
    credentials: true, 
    methods: 'POST,GET,PUT,OPTIONS,DELETE' 
}));


app.use(landingRouter);
app.listen(3001, () => console.log(`Products API listening on port 3001!`));