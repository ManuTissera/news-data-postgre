
import express from "express";
import path from 'path';
import connection from "./connectionBBDD.js";

const requestRouter = express.Router();

const __dirname = path.resolve();
requestRouter.use(express.static(path.join(__dirname, 'public')));

requestRouter.get("/",(req,res)=>{

    console.log('Peticion get realiuzada')
    res.sendFile(path.join(__dirname, 'public','Files_HTML/index.html'))

})



// -------------------------------------------------------------------------------------------------
// ------------------------        ADMINISTRAR TABLAS 
// -------------------------------------------------------------------------------------------------

requestRouter.post('/add_titles',(req,res)=>{

    const { new_name, new_ac, new_value } = req.body;

    const nombre = new_name == undefined ? ['',null] : ['new_name',`'${new_name}'`];
    const acronimo = new_ac == undefined ? ['',null] : [',new_ac',`,'${new_ac}'`];
    const valor = new_value == undefined ? ['',''] : [',new_value ',`,'${new_value}'`]

    connection.query(`INSERT INTO news_name (${nombre[0]}${acronimo[0]}${valor[0]}) VALUES (${nombre[1]}${acronimo[1]}${valor[1]});`,(err,results)=>{
        //connection.query(`INSERT INTO news_name (new_name,new_ac,new_value) VALUES ('Manuel','Tissera','Lo+');`,(err,results)=>{
        if(err){
            res.send(`INSERT INTO news_name (${nombre[0]}${acronimo[0]}${valor[0]}) VALUES (${nombre[1]}${acronimo[1]}${valor[1]});`)
        }else{
            res.send('Titulo agragado')
        }
    })
})
requestRouter.get('/view_news',(req,res)=>{
    connection.query(`SELECT * FROM news_name;`,(err,results)=>{
        if(err) res.send(err);
        res.send(results);
    })
})


// -------------------------------------------------------------------------------------------------
// ------------------------        ECONOMIC CALENDAR
// -------------------------------------------------------------------------------------------------


requestRouter.post('/view_news_calendar', async (req,res)=>{

    // try{
    //     res.send('REALIZASTE LA PETICION BIEN, CULIAAAOOOO')
    // }catch(err){
    //     console.error('Error al obtener datos: ',err);
    //     res.status(500).send('Error en el servidor')
    // }

    try{
        const query = `SELECT nm.id_new_name,nm.new_name,nm.new_site,ec.publication_date,ec.id_new_name,nm.new_value,ec.actual_value,ec.expected_value,ec.previous_value 
                        FROM economic_news_data ec
                        RIGHT JOIN news_name nm ON ec.id_new_name = nm.id_new_name
                        ORDER BY ec.publication_date DESC;`;
        const result = await connection.query(query);
        res.send(result.rows)
    }catch(err){
        console.error('Error al obtener datos: ', err);
        res.status(500).send('Error en el servidor');
    }

    // connection.query(`SELECT nm.id_new_name,nm.new_name,nm.new_site,ec.publication_date,ec.id_new_name,nm.new_value,ec.actual_value,ec.expected_value,ec.previous_value 
    //                     FROM economic_news_data ec
    //                     RIGHT JOIN news_name nm ON ec.id_new_name = nm.id_new_name
    //                     ORDER BY ec.publication_date DESC;`
    //     ,(err,results)=>{
    //     if(err) console.error(err);
    //     res.send(results);
    // })
})

// -------------  FILTER 

requestRouter.post('/filter_news_calendar',(req,res)=>{

    const { from , to } = req.body;

    connection.query(`SELECT nm.id_new_name,nm.new_name,nm.new_site,ec.publication_date,ec.id_new_name,nm.new_value,ec.actual_value,ec.expected_value,ec.previous_value 
                        FROM economic_news_data ec
                        RIGHT JOIN news_name nm ON ec.id_new_name = nm.id_new_name
                        WHERE ec.publication_date > '2024-08-22' AND ec.publication_date < '2024-08-24'
                        ORDER BY ec.publication_date DESC;`
        ,(err,results)=>{
        if(err) console.error(err);
        res.send(results);
    })
})


// -------------------------------------------------------------------------------------------------
// ------------------------        TABLAS
// -------------------------------------------------------------------------------------------------
requestRouter.post(`/add_new_news`,(req,res)=>{

    const { publication_date,publication_time,actual_value,expected_value,previous_value,id_new_name } = req.body;

    connection.query(`INSERT INTO economic_news_data (publication_date,publication_time,actual_value,expected_value,previous_value,id_new_name)
                    VALUES ('${publication_date}','${publication_time} ',${actual_value} ,${expected_value} ,${previous_value},${id_new_name} );`,(err,results)=>{
    if(err) console.error(err)
        res.send(`Se agregaron datos al id = ${id_new_name}`);
})
})

requestRouter.get(`/view_data_news_table/:id_new_URL`,(req,res)=>{
    
    const { id_new_URL } = req.params;

    connection.query(`SELECT * FROM news_name WHERE id_new_name = ${id_new_URL};`,(err,results)=>{
        if(err) console.error(err)
        res.send(results);
    })
})

requestRouter.get(`/view_titles_table/:id_new_URL`,(req,res)=>{

    const { id_new_URL } = req.params;

    connection.query(`SELECT ec.publication_date,ec.actual_value,ec.expected_value,ec.previous_value
                      FROM economic_news_data ec
                      WHERE ec.id_new_name = ${id_new_URL}
                      ORDER BY ec.publication_date DESC;`,
        (err,results)=>{
        if(err){console.error(err)}
        res.send(results);
    })
})
export default requestRouter