const express = require('express');
const app = express();

app.post('/registration', (req, res) => {
    res.send('<html><body>INSIDE REGISTRATION API..</body></html>')
})

app.post('/login', (req, res) => {
    res.send('<html><body>INSIDE LOGIN API..</body></html>')
})

app.get('/search', (req, res) => {
    res.send('<html><body>INSIDE SEARCH API..</body></html>')
})

app.post("/view", (req, res) => {
    res.send('<html><body>INSIDE VIEW API..</body></html>')
})

app.put('/updateprofile', (req, res) => {
    res.send('<html><body>INSIDE UPDATE PROFILE API..</body></html>')
})

app.delete('/deleteuser', (req, res) => {
    res.send('<html><body>INSIDE DELETE USER API..</body></html>')
})

// app.get('/viewstudent', (req, res) => {
//     res.send('<html><body>INSIDE VIEW API..</body></html>')
// });

app.listen(5000, () =>
    console.log('EXPRESS Server Started at Port No: 5000'));
