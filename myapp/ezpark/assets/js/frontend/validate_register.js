let valid = [0,0,0,0,0];

function enableBtn(){
    let total = 0;
    valid.forEach(element => {
        total += element;
    });

    console.log(valid);

    if(total == 5){
        document.getElementById("submit-btn").removeAttribute("disabled");
    }else{
        document.getElementById("submit-btn").setAttribute("disabled",true);
    }
}

document.getElementById("name").addEventListener("input",function(text){
    let name = document.getElementById("name").value;
        
    if(name.length < 5 || name.length > 15){
        document.getElementById("name").className = "form-control alert-danger";
        valid[0] = 0;
    }else{
        document.getElementById("name").className = "form-control";
        valid[0] = 1;
    }

    enableBtn();
});

document.getElementById("email").addEventListener("input",function(text){
    let email = document.getElementById("email").value;
    if( email.indexOf("@") < 1 || email.indexOf(".") > email.length-2 || email.indexOf(".") < 1){
        document.getElementById("email").className = "form-control alert-danger";
        valid[1] = 0;
    }else{
        document.getElementById("email").className = "form-control";
        valid[1] = 1;
    }

    enableBtn();
});

document.getElementById("phone").addEventListener("input",function(text){
    let regex = /^[0-9]+$/;
    let phone = document.getElementById("phone").value.match(regex);

    if( phone == null ){
        document.getElementById("phone").className = "form-control alert-danger";
        valid[2] = 0;
    }else{
        document.getElementById("phone").className = "form-control";
        valid[2] = 1;
    }
    
    enableBtn();
});

document.getElementById("pass").addEventListener("input",function(text){
    let pass = document.getElementById("pass").value;

    if( pass.length < 3 ){
        document.getElementById("pass").className = "form-control alert-danger";
        valid[3] = 0;
    }else{
        document.getElementById("pass").className = "form-control";
        valid[3] = 1;
    }
    
    enableBtn();
});

document.getElementById("agree").addEventListener("change",function(text){
    let terms = document.getElementById("agree").checked;

    if( !terms ){
        valid[4] = 0;
    }else{
        valid[4] = 1;
    }
    
    enableBtn();
});
