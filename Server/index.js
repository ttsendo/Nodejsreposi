//Importacion de un paquete
const express = require('express')

//Especificar el metodo del paquete a emplear
const app = express()

//Especificat el puerto
const port = 8282

//Listar datos de una api
app.get('/',(req, res) => {
    res.write('MetodoGet')
    res.end()
    //res.sendfile()
})

//Respond (res) Enviar datos //Required (req) pedir datos

app.get('*',(req, res) => {
    res.write('pagina no encontrada')
    res.end()
    //res.sendfile(
})

app.listen(port, () => {
    console.log(`Escuchar por el puerto ${port}`)
})