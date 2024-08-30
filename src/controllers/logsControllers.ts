import { Logs } from "../services/logs"

const createLog = new Logs()

export class LogsController {
    private type:string
    private data:object    
    private file:string
    constructor(defaultType="",defaultData = {},defaultFile = ""){
        this.type = defaultType
        this.data = defaultData
        this.file = defaultType
    }
    public async create(logType:string,logData:object,logFile:string){
        this.type = logType
        this.data = logData
        this.file = logFile
        switch(this.type){
            case "info":
            createLog.info(this.data,this.file)
            break
            case "http":
            createLog.http(this.data,this.file)
            break
            case "error":
                createLog.error(this.data,this.file)
            break
        }
    }
}