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
        <li class="list-group-item my-2">`+datetime+`>
            <div class="float-right">
                <button class="btn btn-success" data-toggle="modal" data-target="#modal-book" >Pay</button>
            </div>    
        </li>
        `
    }
  
    this.document.getElementById("list_booking").innerHTML = text;
})