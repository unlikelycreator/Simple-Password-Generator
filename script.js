function custompassword(){
    var custom = document.getElementById("custom").value;
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#!";
    var passwordlength = 6;
    var password = " ";

    for (var i=0; i<passwordlength; i++){
        var randomnumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomnumber,randomnumber+1);
    }
    password = password.split(" ").join(""); 
    document.getElementById("password").value = custom.concat(password);
}
function randompassword(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#!";
    var passwordlength = 12;
    var password = " ";

    for (var i=0; i<passwordlength; i++){
        var randomnumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomnumber,randomnumber+1);
    }
    document.getElementById("password").value = password;
}