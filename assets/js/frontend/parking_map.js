window.addEventListener("load",function(){
    
    let arr_valet = [];
    let arr_parking = [];
    
    for(let i=0;i<10;i++){
        if(i < 10){
            arr_valet.push(0) 
        }
        arr_parking.push(0)
    }

    for(let i=0;i<30;i++){
        if(i < 10){
            arr_valet[Math.floor(Math.random()*10)+5] = 1;
        }
        arr_parking[Math.floor(Math.random()*30)+5] = 1;
    }

    for(let i=0;i<30;i++){

        if(i < 10){
            if(arr_valet[i] == 1){
                document.getElementById("list_valet").innerHTML += 
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
                document.getElementById("list_valet").innerHTML += 
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
        }
        
        if(arr_parking[i] == 1){
            document.getElementById("list_parking").innerHTML += 
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
            document.getElementById("list_parking").innerHTML += 
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
    

    this.document.getElementById("btn-valet").addEventListener("click",function(){
        document.getElementById("btn-kendaraan").innerHTML = "Valet";
        document.getElementById("list_valet").className = "row";
        document.getElementById("list_parking").className = "row d-none";
    })
    this.document.getElementById("btn-parking").addEventListener("click",function(){
        document.getElementById("btn-kendaraan").innerHTML = "Parking";
        document.getElementById("list_valet").className = "row d-none";
        document.getElementById("list_parking").className = "row";
    })
})