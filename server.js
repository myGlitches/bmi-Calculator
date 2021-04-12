const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen(5000, () => {
    console.log('App listening @ port 5000!');
});

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post("/bmicalculator", (req, res) => {
    
    var num1 = parseFloat(req.body.n1);
    var num2 = parseFloat(req.body.n2);

    var bmi = num1/(num2*num2);

    var total = bmi;

    res.send("BMI is : " + total);

    

});

