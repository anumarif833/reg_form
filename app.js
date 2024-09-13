function registration(){
    event. preventDefault()
    var name = document.getElementById("name")
    var name = document.getElementById("email")
    var name = document.getElementById("phoneNumber")
    var name = document.getElementById("cpassword")

    console.log(name.value, email.value,phoneNumber.value,password.value,cpassword.value);
    var userData = {
        name :name.value,
        email : value,
        phoneNumber :phoneNumber.value,
        password : password.value,
        cpassword : cpassword.value
    }
    console.log(userData);
    localStorage.setItem("userData", JSON.stringify(userData))
    var getData = localStorage.getItem("userData")
    var passData = JSON.parse(getData)
    console.log(getData)
    setTimeout(() =>{

}, timeout);

}