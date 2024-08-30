import winston from "winston"

export class Logs{
    private data:object
    private file:string
    constructor(defaultData = {},defaultFile = ""){
        this.data = defaultData
        this.file = defaultFile
    }
    http(data:object,file:string){
      this.data = data
      this.file = file 
      const createLog = winston.createLogger({
          level: 'info', 
          format: winston.format.json(),
          transports: [
            new winston.transports.File({ filename: this.file })
          ]
        });
        createLog.info(this.data)
      }
    info(data:object,file:string){
        this.data = data
        this.file = file 
        const createLog = winston.createLogger({
            level: 'info', 
            format: winston.format.json(),
            transports: [
              new winston.transports.File({ filename: this.file })
            ]
          });
          createLog.info(this.data)
        }
        error(data:object,file:string){
            this.data = data
            this.file = file 
            const createLog = winston.createLogger({
                level: 'error', 
                format: winston.format.json(), 
                transports: [
                  new winston.transports.File({ filename: this.file })
                ]
              });
              createLog.error(this.data)
        }
}