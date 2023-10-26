//Importacion de un paquete
const express = require('express')

//Especificar el metodo del paquete a emplear
const app = express()

//Especificat el puerto
const port = 8282

//Listar datos de una api
app.get('/',(req, res) => {
    // res.write('MetodoGet')
    // res.end()
    res.sendFile(__dirname+'/public/home.html')
})

//Respond (res) Enviar datos //Required (req) pedir datos

//Desplegar el 404: Pagina No Encontrada
app.get('*',(req, res) => {
    // res.write('pagina no encontrada')
    // res.end()
    //res.sendfile()
    res.sendFile(__dirname+'/public/404.html')
})

//Especificar el puerto a emplear
app.listen(port, () => {
    console.log(`Escuchar por el puerto ${port}`)
})



