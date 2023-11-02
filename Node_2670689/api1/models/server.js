const express = require('express')
let aprendices = [
    {
        "documento": 1111,
        "nombre": "Carmen",
        "apellidos": "Moreno"
    },
    {
        "documento": 2222,
        "nombre": "Tomasa",
        "apellidos": "CienFuegos"
    },
]
class Server{

    constructor(){
        this.app=express()
        this.port= process.env.PORT
        this.routes()
    }


    //la escucha o el servidor
    listen(){
        this.app.listen(
            this.port, () =>{
                console.log('Escuchando por el puerto'+this.port)

            } 
        )
    }


routes(){
    this.app.get('/', (req, res) => {
        res.json({
            msg:aprendices
        })
    }
    )
        this.app.get('/consultarAprendiz',(req,res)=>{
            const{documento,nombre}=req.query//Recibir Parametros
            let resultado = ''
            //buscar el documento
            resultado=aprendices.find(aprendiz=> aprendiz.documento === parseInt(documento))
        

        res.json({
            msg:resultado
        })
    })

    this.app.post('/',(req,res)=>{
        const{documento,nombre,apellidos}=req.query
        aprendices.push({
            "documento":documento,
            "nombre":nombre,
            "apellidos":apellidos
        })
        res.json({
            msg:aprendices
        })
    })
}
}


module.exports = {Server} //exportacion de la clase