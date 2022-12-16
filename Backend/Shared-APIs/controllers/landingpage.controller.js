var mysql = require('mysql2');

var db_config = {
    host: "mysqldb",
    user: "root",
    port: 3306,
    password:  "1234567",
    database: "daphne_db"
  };

  var con;

function handleDisconnect() {
    con = mysql.createConnection(db_config);                                           
    con.connect(function(err) 
    {            
        if(err) {                                  
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); 
        }                                     
    });                                     
    con.on('error', function(err) 
    {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
            handleDisconnect();                        
        } else {                                      
            throw err;                                 
        }
    });
}

handleDisconnect();


function GetNews (req,res){ 
     try {
         con.query("SELECT * FROM news", function (err, result, fields) {
         if (err) throw err;
         res.json(result);
         });
     } catch (error) { 
         res.json("Something Wrong");
     }
}


module.exports = { GetNews};

