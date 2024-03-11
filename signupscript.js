const form = document.getElementById("form")
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')

const form2 = document.getElementById("form2")





form.addEventListener('submit',(e)=>{
   

    if(!validation()){
    e.preventDefault();
    }
       
    
})


function validation(){
    const usval = username.value.trim()
    const mailval = email.value.trim()
    const passwordval = password.value.trim()
    const cpasswordval = cpassword.value.trim()
    let s =true;

    

if(usval === ''){
    s=false;
    set(username, "Username is reqruied")
}
else{
    sets(username)
}

if(mailval === ''){
    s=false;
    set(email,"Email is required")
}else if(!validateEmail(mailval)){
    s=false;
    set(email,"Email is invalid")
}else{
    sets(email)
}



if(passwordval === ''){
    s=false;
    set(password,"Password is required")
}if(passwordval.length< 8){
    s=false;
    set(password,"Pasword must be atleast 8 characters long")
}else{
    sets(password)
}


if(cpasswordval===''){
    s=false;
    set(cpassword,"Password is required")
}else if(cpasswordval!==passwordval){
    s=false;
    set(cpassword,"Password doesn't match")
}else{
    sets(cpassword)
}


return s;



}



function set(element,message){

 

    const first = element.parentElement;
    
    const parent = first.parentElement;
    const error = parent.querySelector(".erro")

    error.innerText = message

    parent.classList.add('erro')
    parent.classList.remove('succ')
    
    // console.log(error)
    

}

function sets(element){

 

    const first = element.parentElement;
    
    const parent = first.parentElement;
    const error = parent.querySelector(".erro")

    error.innerText ='';

    parent.classList.add('succ')
    parent.classList.remove('erro')
   
   
    
}






