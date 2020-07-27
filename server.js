var express=require('express')
var app=express()

app.use(express.static(__dirname+'/public'));

var adder=function(num1,num2){
    var result=num1+num2;
    return result
}
app.get('/adder',function(req,res){
    var num1=parseInt(req.query.num1);
    var num2=parseInt(req.query.num2);
    var result=adder(num1,num2)
    res.send('the result is: '+result)
})

app.get('/test',function(req,res){

    var username=req.query.username;
    console.log('Ye i have been hit'+username);
    res.send('Hello y find me '+username);
})

var port=3000;
app.listen(port)
console.log('server listen on: '+port)