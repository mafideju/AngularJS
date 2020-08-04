const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(__dirname + '/'));

app.get('/customers/:id', function(req, res) {
  var customerId = parseInt(req.params.id);
  var data = {};
  for(var i=0;i<customers.length;i++) {
    if(customers[i] === customerId) {
      data = customers[i];
      break;
    }
  }
  res.json(data);
});

app.get('/customers', function(req, res) {
  res.json(customers);
});

app.listen(port);
console.log(`Express rolando na porta ${port}..`);

