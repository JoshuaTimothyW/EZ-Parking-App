document.getElementById("barcode-btn").addEventListener("click",function(){
    const JsBarcode = require("jsbarcode");

    JsBarcode("#barcode","123456789012");
});

document.getElementById("create-file").addEventListener("click",function(){
    const fs = require("html5-fs");

    let data = {
        barcode:123456789012,
    }

    fs.writeFile("./data.json",JSON.stringify(data),function(err){
        console.log(err);
    });
});

