
import pkg from 'pg';
const { Client } = pkg;


// const connection = new Client({
//     host: 'localhost',
//     user: 'postgres',
//     password: '3752Post',
//     database: 'news_data_base',
//     port: 5432,
// });

const connection = new Client({
    connectionString: process.env.DATABASE_URL, // Usamos la variable de entorno proporcionada por Heroku
    ssl: {
        rejectUnauthorized: false // Esto es necesario para permitir conexiones SSL con Heroku
    }
});


connection.connect((err) => {
    if(err){
        console.error('Connection error', err.stack);
    }else{
        console.log('COnnected to PostgreSQL');
    }
});


export default connection;


