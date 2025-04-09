const mysql = require('mysql');


const DatabaseConnectionConfig = {
    host:"localhost",
    user:"root",
    password:"",
    database:"school",
}


const con = mysql.createConnection(DatabaseConnectionConfig);


//connection
con.connect((err)=>{
    if(!err){
        console.log('Connection Success');
        InsertData(con);
    }
    else{
        console.log('connection fail');
        
    }
})

//Insert Data Fucnction
function InsertData(con){

    let SQLQuery = "INSERT INTO `student_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('Kabirul','011202026','BSC','017********','Mymensingh')"
    con.query(SQLQuery, function(err){
        if(!err){
            console.log("Data Insert Successfully");
        }else{
            console.log("Data Insert Fail");
        }
    })
}