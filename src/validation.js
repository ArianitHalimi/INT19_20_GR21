$(document).ready(()=>{
    entrypoint();
});

const password = document.getElementById('password').value;

const entrypoint = () => {
    $('#login').submit((e)=>{
        if(validate(password)===0){
            e.preventDefault();
        }
    });
}

const validate = (password)=>{
    if(password<6){
        return 0;
        console.error("Error password must be 6 characters");
    }
    else if(password>6 && password < 8){
        return 1
        console.warn("Password is weak");
    }
    else if(password>8 && password<10){
        return 1;
        console.log("Password is strong");
    }
    else{
        return 1;
        console.log("Password is very strong");
    }
}