// Page Loaded
window.addEventListener("load",() => {
    
    let date = new Date();
    let initChar = 65;
    let totalAvailable = 15;
    let data = "";

    // Fill every slot data
    for(let i=0;i<totalAvailable/5;i++){
        data += `<div class="col-md-4">`;

        for(let j=0;j<totalAvailable/3;j++){

            let codeNumber = String.fromCharCode(initChar)+(j+1)

            data +=
            `
            <div class="bg-success p-2 m-2" id="`+codeNumber+`" data-toggle="modal" data-target="show-modal" onclick="slotData(`+codeNumber+`)">
                <p class="text-white">BOOKING AVAILABLE</p>
                <p class="text-white">`+codeNumber+`</p>
            </div>
            `;
        }

        initChar++;
        data += `</div>`;
    }

    document.getElementById("park-load").innerHTML += data; 
    document.getElementById("available-amount").innerHTML = "Total Available: "+totalAvailable+" Slots";
    document.getElementById("date-now").innerHTML = date;

});


// Show Booking Data
function slotData(){
    
}

// QR Code Generator
function generateQr(id){
    var QRCode = require('qrcode');
    var canvas = document.getElementById(id);
    
    QRCode.toCanvas(canvas, 'sample text', function (error) {
    if (error) console.error(error)
        console.log('success!');
    })
}