const express = require('express'); //Import the express dependency
const app = express();         
app.get('/test', (req, res) => {        
    res.send('HI from data');                                                              
});
app.listen(3000, () => console.log(`Data API listening on port 3000!`));