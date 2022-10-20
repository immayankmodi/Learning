const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello, this is home page')
})

app.get('/about', (req, res) => {
    res.send('Hello, this is about us page')
})

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`)
})