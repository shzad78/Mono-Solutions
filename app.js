
var express = require('express');
var app = express();
var bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('',express.static('web'));

app.post('/user', function(req, res){
   console.log("req.body", req.body.user);
    console.log("req.body", req.body.phone);
    console.log("req.body", req.body);
   res.send("Data is saved'!\n");
});
app.post('/userNjs', function(req, res){
    console.log("req.body", req.body);
    res.writeHead(302, {
  'Location': 'http://localhost:8082/Njs/thankyou.html/'
 });
res.end();

});

app.get('*', function(req, res) {
  res.sendfile('./web/index.html')
})



app.listen(8082,'0.0.0.0',function(){
console.log("server is listening at port 8082");
});
