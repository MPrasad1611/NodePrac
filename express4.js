const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());
app.get('/api', (req, res) => {
    fs.readFile('./hello.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.parse(data));
        }
    })
    
})

app.listen(3900, () => {
    console.log("server is running on port 3900")
})