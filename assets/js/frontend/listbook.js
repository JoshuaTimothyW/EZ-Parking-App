window.addEventListener("load",function(){
    let text = ""
    let currentdate = new Date();
    let datetime = "Time Now: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    

    for(let i=0;i<5;i++){
        text +=
            `
            <li class="list-group-item my-2"> <strong class="text-primary">Order No. `+(i+1)+`</strong><br><br><strong class="text-primary">`+datetime+`</strong>>
                <div class="float-right">
                    <button class="btn btn-success" data-toggle="modal" data-target="#modal-mobil" >Pay</button>
                </div>    
            </li>
            `
        
    }
    

    this.document.getElementById("list_booking").innerHTML = text;
    // this.document.getElementById("motor-out").value = currentdate.getHours()+ ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    // this.document.getElementById("motor-in").value = currentdate.getHours()-5+ ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    
    this.document.getElementById("mobil-out").value = currentdate.getHours()+ ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    this.document.getElementById("mobil-in").value = currentdate.getHours()-5+ ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
})
