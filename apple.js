// function validateemail(){
    
//     var mail = document.getElementById("form5Example22").value;

//     var regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// }

let display_msg=document.getElementById('display-msg');
let regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let submitted=document.getElementById("submitted")
let text_Email=document.getElementById('text-Email')

function validate_email(){
    

    
    if(text_Email.value.length==0){
       
        display_msg.innerHTML='Email is mandatory'
        display_msg.style.color="white";
        return false;
    }else{

        display_msg.innerHTML=''
        return true;
  }


}


submitted.addEventListener('click',function(){

   
    
    if(text_Email.value.length==0){
        alert("Email is empty");
        return false;
    }else if(!text_Email.value.match(regx)){
        display_msg.innerHTML='Email is not valid'
        display_msg.style.color="white";
        return false;
    }else{

        alert("Success")
          
        return true;
        
    }



});

