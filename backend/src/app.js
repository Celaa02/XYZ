import express from 'express';
import morgan from 'morgan'
import cors from 'cors';

const app = express()

import RouterClient from './routes/client.routes'
import RouterAuth from './routes/auth.routes'
import RouterUser from './routes/user.routes'
import RouterExcel from './routes/excel.routes'

app.use(morgan('dev'));
app.use(express.json())

const whitelist = ['http://localhost:5173'];

const corsOptions = {
    origin: function(origin, callback){
        if(whitelist.includes(origin)) {
           //the query la API it`s successfully
           callback(null, true)
        }else {
            //the query it`s not allow
            callback(new Error("Cors`s Errors"))
        }
    },

}

app.use(cors(corsOptions))
app.get('/', (req, res)=>{
    res.json ({
        author: 'Darly Vergara',
        description: "Prueba",
        version: "0.5.0"
    })
})

app.use ('/client', RouterClient)
app.use('/auth', RouterAuth)
app.use('/user', RouterUser)
app.use('/download', RouterExcel)
export default app;