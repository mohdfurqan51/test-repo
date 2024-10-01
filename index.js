const express = require('express')
const app = express()

app.get('/sum/:a/:b', function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.json({
    answer: a+b
  })
})

app.get('/multiply', function (req, res) {
    const a = req.query.a;
    const b = req.query.b;

  res.json({
    answer: a-b
  })
})

app.get('/subtract', function (req, res) {
    
})

app.get('/divide', function (req, res) {
    
})

app.listen(3000)