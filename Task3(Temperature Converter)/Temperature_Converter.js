
function convert(){
    let inputEl = document.getElementById("input-el").value;
    let text;
    let output1=0;
    var regex=/^[0-9]+$/;
    if(!inputEl.match(regex)){
        alert("Invalid input please enter a valid number");
    }
    if(inputEl.match(regex)){
        if(document.getElementById("fahren").checked){
           output1=Math.ceil(((inputEl) * 1.8) + 32);
           
           
    }else{
         output1=Math.ceil(((inputEl) - 32) / 1.8);
        
    }
   document.getElementById("output-el").innerHTML='output:'+output1;
}
}
function Reset(){
    document.getElementById("form1").reset();
}
