console.clear();

import express from "express";
import path from 'path';
import cors from "cors";
import requestRouter from "./Routes/routes.js";

const expressApp = express();
const PORT = 3000;

// expressApp.use(express.json());
// expressApp.use(express.text());
expressApp.use(cors());
expressApp.use(requestRouter);


expressApp.listen(PORT,()=>{
    console.log('Funciona ahora')
    console.log(`Servidor levantado en el puerto ${PORT}`);
})