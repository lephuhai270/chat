var express = require('express');
var app = express();

app.use(express.static("public"))
app.set ("view engine", "ejs");
app.set ("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

var mangUser =[];

io.on("connection", function(socket){
    
    console.log("co nguoi ket noi: "+ socket.id);

    socket.on("Client-send-data", function(data){
        console.log(data);
        if(mangUser.indexOf(data)>=0){
            socket.emit("Server-dk-thatbai")
        //io.sockets.emit("Server-send-data", hello +"888")
        //socket.emit("Server-send-data", hello)
        }else{
            mangUser.push(data);
            socket.Username = data;
            socket.emit("Server-send-dk-thanhcong",data)
            io.sockets.emit("Server-send-ds-dktc", mangUser)
        };
    });
    socket.on("Client-send-message-chat", function(data){
        console.log(data);
        io.sockets.emit("user-chat", {name:socket.Username, nd:data})
        })  
});

app.get ("/", function(req,res){
    res.render("trangchu")
})