
import pkg from 'pg';
const { Client } = pkg;


const connection = new Client({
    host: 'localhost',
    user: 'postgres',
    password: '3752Post',
    database: 'news_data_base',
    port: 5432,
});


connection.connect((err) => {
    if(err){
        console.error('Connection error', err.stack);
    }else{
        console.log('COnnected to PostgreSQL');
    }
});


export default connection;


// import mysql from 'mysql';

// const connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'news_data_base'
// });

// connection.connect((err)=>{
//     if(err) throw err;
//     console.log('Successfull Connection')
// });

// export default connection;