require('dotenv').config();
var CustomerDetails = require('./user.model');
var ListofTickets = require('./ticket.model');
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/register',function(req,res){
    // console.log(req.body);
    var newCustomer = new CustomerDetails(req.body);
    newCustomer.save();
})
app.post('/login',function(req,res){
    // console.log(req.body);
    var userDetails = req.body;
    CustomerDetails.find()
    .then((data)=>{
        var detail = data.filter((d)=>{
            if(userDetails.username === d.username && userDetails.password === d.password){
                return true;
            }
        })
        res.json(detail);
    })
    .catch((err)=>{res.send('Error',err)});
})
app.post('/',function(req,res){
    // console.log(req.body);
    var userDetails = req.body;
    CustomerDetails.find()
    .then((data)=>{
        var detail = data.filter((d)=>{
            if(userDetails.username === d.username && userDetails.password === d.password){
                return true;
            }
        })
        res.json(detail);
    })
    .catch((err)=>{res.send('Error',err)});
})
app.get('/dashboard',function(req,res){
    CustomerDetails.find()
    .then((data)=>data.filter((d)=>{
        res.json(d);
    }))
    .catch((err)=>{res.send('Error',err)});
})
app.post('/addticket',function(req,res){
    // console.log(req.body);
    var newTicket = new ListofTickets(req.body)
    newTicket.save();
})
app.get('/tickets',function(req,res){
    ListofTickets.find()
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.send('Error',err);
    })
})
app.get('/manager',function(req,res){
    ListofTickets.find()
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.send('Error',err);
    })
})
app.get('/employees',function(req,res){
    CustomerDetails.find({role:"employee"})
    .then((data)=>{
        res.json(data)
    })
})
app.put('/updateTicket/:id',function(req,res){
    ListofTickets.findByIdAndUpdate({_id:req.params.id},req.body)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.send('No ticket received',err)
    })
})
app.listen(process.env.PORT,()=>{console.log('Server running on '+process.env.PORT)})