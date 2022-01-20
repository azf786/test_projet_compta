const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const pool = require('./db')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/test', async (req, res) => {
    try {
        const test = await pool.query("SELECT * FROM client;");
        console.log(test.rows);
        res.send(test.rows)
    } catch (err) {
        console.log(err);
    }

})

app.listen(process.env.PORT || 8081)

