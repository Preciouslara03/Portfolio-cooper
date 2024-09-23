function ValidationUserName(){
    let user = document.getElementById('user').value;
    let regUser = /^[A-Z][a-z0-9]{4,9}$/;  

    if (regUser.test(user)) {
        document.getElementById("pMsg").innerHTML = "Valid Username";
    } else {
        document.getElementById("pMsg").innerHTML = "Incorrect Username";
    }
}

function ValidationPassWord(){
    let pass = document.getElementById('password').value;
    let regPass = /^[A-Z][a-z0-9]{4,19}$/;  
    if (regPass.test(pass)) {
        document.getElementById("uMsg").innerHTML = "Valid Password";
    } else {
        document.getElementById("uMsg").innerHTML = "Incorrect Password";
    }
}