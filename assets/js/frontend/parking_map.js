window.addEventListener("load",function(){
    
    let arr_motor = [];
    let arr_mobil = [];
    
    for(let i=0;i<30;i++){
        arr_motor.push(0)
        arr_mobil.push(0)
    }

    for(let i=0;i<10;i++){
        arr_motor[Math.floor(Math.random()*10)+3] = 1;
        arr_mobil[Math.floor(Math.random()*10)+5] = 1;
    }

    for(let i=0;i<30;i++){

        if(arr_motor[i] == 1){
            document.getElementById("list_motor").innerHTML += 
            `
            <div class="col-lg-2">
                <button id="parking-slot" class="box rounded bg-danger border text-center text-white h3">
                    `
                    +(i+1)+
                    `
                </button>
            </div>
            `
        }else{
            document.getElementById("list_motor").innerHTML += 
            `
            <div class="col-lg-2">
                <button id="parking-slot" class="box rounded bg-success border text-center text-white h3" data-toggle="modal" data-target="#modal-motor">
                    `
                    +(i+1)+
                    `
                </button>
            </div>
            `
        }
        
        if(arr_mobil    [i] == 1){
            document.getElementById("list_mobil").innerHTML += 
            `
            <div class="col-lg-2">
                <button id="parking-slot" class="box rounded bg-danger border text-center text-white h3">
                    `
                    +(i+1)+
                    `
                </button>
            </div>
            `
        }else{
            document.getElementById("list_mobil").innerHTML += 
            `
            <div class="col-lg-2">
                <button id="parking-slot" class="box rounded bg-success border text-center text-white h3" data-toggle="modal" data-target="#modal-mobil">
                    `
                    +(i+1)+
                    `
                </button>
            </div>
            `
        }
        
    }
    

    this.document.getElementById("btn-motor").addEventListener("click",function(){
        document.getElementById("btn-kendaraan").innerHTML = "Parkir Motor";
        document.getElementById("list_motor").className = "row";
        document.getElementById("list_mobil").className = "row d-none";
    })
    this.document.getElementById("btn-mobil").addEventListener("click",function(){
        document.getElementById("btn-kendaraan").innerHTML = "Parkir Mobil";
        document.getElementById("list_motor").className = "row d-none";
        document.getElementById("list_mobil").className = "row";
    })
})