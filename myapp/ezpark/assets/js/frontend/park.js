

// Page Loaded
window.addEventListener("load",function(){

    let date = new Date();
    let initChar = 65;
    let totalAvailable = 15;
    let data = "";

    // Fill every slot data
    for(let i=0;i<totalAvailable/5;i++){
        data += `<div class="col-md-4">`;

        for(let j=0;j<totalAvailable/3;j++){

            let codeNumber = String.fromCharCode(initChar)+(j+1);

            data +=
            `
            <a href='#book-form' id="slot" code="`+codeNumber+`"> 
                <div class="bg-success p-2 m-2">
                    <p class="text-white">BOOKING AVAILABLE</p>
                    <p class="text-white">`+codeNumber+`</p>
                </div>
            </a>
            `;
        }

        initChar++;
        data += `</div>`;
    }

    // Fill data to component
    document.getElementById("park-load").innerHTML += data; 
    document.getElementById("available-amount").innerHTML = "Total Available: "+totalAvailable+" Slots";
    document.getElementById("date-now").innerHTML = date;

    // add listener to component
    document.getElementById("sign-out").addEventListener("click",function(){
        signOut();
    }); 

    
    document.getElementById("slot").addEventListener("click",function(e){
        bookingForm(e.target.id);
    });
});

// Sign Out
function signOut(){
    console.log("sign out");
};


// Generate Booking Form
function bookingForm(id) {
    // prevent from trigger when page loaded
    // event.preventDefault();
    console.log(id);

    let txt = `
    <div class="h5 text-center">Please fill this Booking Form for parking to : <b id="slot-id">`+code+`</b></div>
    <div class="form-group">
        <label>License Plate Number</label>
        <input type="text" class="form-control" id="plate" placeholder="">
    </div>
    <div class="form-group">
        <label >Name</label>
        <input type="text" class="form-control" id="name" placeholder="">
    </div>
    <div class="form-group">
        <label >Phone</label>
        <input type="text" class="form-control" id="phone" placeholder="">
    </div>
    <div class="form-group">
        <label >Email</label>
        <input type="text" class="form-control" id="email" placeholder="">
    </div>
    
    <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">I Agree that this booking is valid for 1 hour after submitting this form</label>
    </div>
 
    <div class="text-center">
        <button class="btn btn-success btn-block" data-toggle="modal" data-target="#exampleModalLong" onclick="generateTicket()">Get Booking Ticket</button>
    </div>
    `;
 
    document.getElementById("book-summary").innerHTML = txt;
 }

//  Generate Ticket
function generateTicket(){
    let obj = {
        slot: document.getElementById("slot-id"),
        plate: document.getElementById("plate"),
        name: document.getElementById("name"),
        phone: document.getElementById("phone"),
        email: document.getElementById("email"),
    };
    
    console.log(obj);
    
    // generateQr("qr-result",JSON.stringify(obj));
}
 

// QR Code Generator
function generateQr(id,data){
    var QRCode = require('qrcode');
    var canvas = document.getElementById(id);
    
    QRCode.toCanvas(canvas,JSON.stringify(data), function (error) {
    if (error) console.error(error)
        console.log('success!');
    })
}