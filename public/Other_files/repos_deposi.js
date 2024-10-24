let arrHojas = ['NewJobClaims', 'PMI_Index','MPI_ISM', 'AvgEarings','AvgEarM', 'NoFarmPay', 'LabForPart', 'Inv_Crud_IEA', 
    'NonFarmPriv', 'UnempRate', 'PMI_SyP', 'PMI_Service', 'NMPI_ISM', 'PPI_Sub', 'PPI', 'CPI_Sub_YoY', 'CPI_Sub_MoM', 'CPI_MoM', 'CPI_YoY', 
    'Sales_R_MoM', 'IPRIX', 'IPRIM', 'Phila_FIM', 'RIForectast', 'Ret_Sales', 'IPI', 'PMI_Manfact', 'Ex_HoSa_MoM', 'Ex_HoSa', 'New_Ho_Sa', 
    'New_HoSa_MoM', 'DGO_S_MoM', 'DGO_MoM', 'Conf_Board', 'GDP', 'PIG_GDP', 'PCE_YoY', 'PCE_MoM', 'PCE_Anual', 'PCE_Per', 'Per_Spend']







btnAddTable.addEventListener("click",()=>{
    addTableFn();
})

btnDelTable.addEventListener("click",()=>{
    delTableFn()
})


// Crear tablas 
requestRouter.post('/inicio',(req,res)=>{

    //const { date_new,name_new,ac_new } = req.body;
    const { tabla } = req.body;

    //connection.query(`INSERT INTO news_name (date_new, name_new, ac_new) VALUES ('${date_new}','${name_new}','${ac_new}')`, (err, results) => {
    connection.query(`
      CREATE TABLE ${tabla} (
    id_table INT NOT NULL AUTO_INCREMENT,
    fecha DATE NOT NULL,
    hora TIME DEFAULT NULL,
    actual FLOAT DEFAULT NULL,
    prevision FLOAT DEFAULT NULL,
    anterior FLOAT DEFAULT NULL,
    tabla VARCHAR(100) DEFAULT NULL,
    PRIMARY KEY (id_table)
    );
        `, (err, results) => {

        if(err) {
            console.error('Error executing query: ' + err.stack);
            res.status(500).send('Error fetching users');
            return;
        }
        res.send(`Delete ${tabla} table `);
    })

});


// // Eliminar tablas del servidor 
// requestRouter.post('/droptable',(req,res)=>{

//   const { tabla } = req.body;

//   connection.query(`
//     DROP TABLE ${tabla}
//       `, (err, results) => {

//       if(err) {
//           console.error('Error executing query: ' + err.stack);
//           res.status(500).send('Error fetching users');
//           return;
//       }
//       res.send(`Delete ${tabla} table `);
//   })

// });

// // Cargar tablas al servidor 
// requestRouter.post('/loadtable',(req,res)=>{

//   const { tabla } = req.body;

//   connection.query(`
//                    CREATE TABLE ${tabla} (
//                        id_table INT NOT NULL AUTO_INCREMENT,
//                        fecha DATE NOT NULL,
//                        hora TIME DEFAULT NULL,
//                        actual DECIMAL(10,3) DEFAULT NULL,
//                        prevision DECIMAL(10,3) DEFAULT NULL,
//                        anterior DECIMAL(10,3) DEFAULT NULL,
//                        tabla VARCHAR(100) DEFAULT NULL,
//                        PRIMARY KEY (id_table)
//                        );
//       `, (err, results) => {

//       if(err) {
//           console.error('Error executing query: ' + err.stack);
//           res.status(500).send('Error fetching users');
//           return;
//       }
//       res.send(`Crate ${tabla} table `);
//   })

// });
