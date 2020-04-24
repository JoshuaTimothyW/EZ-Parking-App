// QR Code Generator
function generateQr(id,data){
    var QRCode = require('qrcode');
    var canvas = document.getElementById(id);
    
    QRCode.toCanvas(canvas,JSON.stringify(data), function (error) {
    if (error) console.error(error)
        console.log('success!');
    })
}

document.getElementById("qr-btn").addEventListener("click",function(){
    let obj = {
        name:"test",
        email:"test@gmail.com",
    }
    generateQr("qr",obj);
});