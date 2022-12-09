const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo this is @ITSN0B1T4 here!')
})
app.listen(process.env.PORT || 3000)
