window.addEventListener("load",function(){
    
    let text = "";
    

    for(let i=0;i<30;i++){
        text += 
        `
        <div class="col-lg-2">
            <button id="parking-slot" class="box rounded bg-success border text-center text-white h3" data-toggle="modal" data-target="#modal-book" >
                `
                +(i+1)+
                `
            </button>
        </div>
        `
    }
    
    
    document.getElementById("list_slot").innerHTML = text;
})