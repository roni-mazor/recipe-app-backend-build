const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const http = require('http').createServer(app)
app.use(express.json())


app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use(express.static(path.resolve(__dirname, 'public')))



const recipeRoutes = require('./api/recipe/recipe.routes.js')
app.use('/api/recipe', recipeRoutes)

const port = process.env.PORT || 3030
http.listen(port, () => {
    console.log('running')
})