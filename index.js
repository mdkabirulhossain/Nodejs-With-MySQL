const mysql = require('mysql');


const DatabaseConnectionConfig = {
    host:"localhost",
    user:"root",
    password:""
}


const connection = mysql.createConnection(DatabaseConnectionConfig);


//connection
connection.connect((err)=>{
    if(!err){
        console.log('Connection Success');
    }
    else{
        console.log('connection fail');
    }
})