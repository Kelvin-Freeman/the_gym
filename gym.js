
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log("hello");
    res.send('<h1>Hello World!</h1>')
})



app.listen(3000, function() {
    console.log(`Server listening in port: 3000`)
})