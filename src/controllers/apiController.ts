import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from "body-parser";
import { routes } from "../routes/routes";

export class Api{
    private port:number;
    private routes: any[];

    constructor(defaultServerPort = 80, defaultServerRoutes = []){
        this.port = defaultServerPort,
        this.routes = defaultServerRoutes
    };
    public async start(){
        dotenv.config();
        const getApiPort = process.env.API_PORT as string;
        this.port = Number(getApiPort);
        const instance = express();
        this.routes = routes;
        try{
            instance.use(bodyParser.json());
            instance.use(cors());
            instance.use(this.routes);
            instance.listen(this.port,()=>{
                console.log("api iniciada com sucesso na porta",this.port);
            });  
        }catch(error){
            console.log("não foi possivel iniciar a api",error);
        };
    };
}