const express = require('express')

const hbs = require('hbs')
const path = require('path')

const app = express()

const port = 8383


// Contenido estatico del servidor en este caso son las vistas
app.use(express.static('public'))

// El path asigna la ubicacion de los archivos que se le aplicara el hsb
app.set('views', path.join(__dirname+'/public/views'))
// Se usa la ingeneria de vistas de hbs
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/public/views/partials')


app.get('/', (req, res) =>{
    res.render( 'index',{
        "nombre":"Brandon Mejía",
        "email":"b1@gmail.com"
    })
})

app.get('/productos', (req, res) =>{
    res.render( 'productos',{
        "nombreProducto":"Arepas",
        "Precio":"3500"
    })
})

app.get('/contacto', (req, res) =>{
    res.render( 'contacto',{
        "numeroContacto":"123312123",
        "correoElectronico":"b1@gmail.com.co"
    })
})

app.get('*', (req, res) =>{
    res.render('404')
})

app.listen(port, ()=>{
    console.log(`Listen to port: ${port}`)
})