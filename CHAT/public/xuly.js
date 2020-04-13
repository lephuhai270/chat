var socket = io("http://localhost:3000/");
socket.on("Server-dk-thatbai",function(){
        alert("Sai username cmnr");
});
socket.on("Server-send-dk-thanhcong",function(data){
        
        $("#currentUser").html(data);
        $("#loginForm").hide(2000);
        $("#chatForm").show(1000);
        $("#boxContent").html(data);
                //data.forEach(function(i){
        //$("#boxContent").append("<div class='user'>"+ i +"</div>")
       //});
});
socket.on("Server-send-ds-dktc",function(data){
       // $("#currentUser").html(data);
       // $("#loginForm").hide(2000);
       // $("#chatForm").show(1000);
        $("#boxContent").html("");
            data.forEach(function(i){
                $("#boxContent").append("<div class='user'>"+ i +"</div>")
       });
});
socket.on("user-chat",function(data){
        $("#ListMessage").append("<div class='ms'>"+ data.name + ":"+ data.nd +"</div>")
});

$(document).ready(function(){
    $("#loginForm").show();
    $("#chatForm").hide();
    $("#btnRegister").click(function(){
       socket.emit("Client-send-data", $('#txtUsername').val())
});
    $("#btnSendMessage").click(function(){
        socket.emit("Client-send-message-chat", $('#txtMessage').val())
        $('#txtMessage').val("");
   });
});


