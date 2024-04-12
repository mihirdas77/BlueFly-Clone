// import { navbar,searchfun } from "../components/navbar.js";
// document.getElementById("navbar").innerHTML=navbar()
// //document.getElementById("search-bar").inn=searchfun()


// import {footer} from "../components/navbar.js"
// document.getElementById("footer-fetch").innerHTML=footer()



document.getElementById("create-btn").addEventListener("click",function(){
 
    event.preventDefault()
    let objdata={
        name:document.getElementById("name").value,
        lastName:document.getElementById("lastName").value,
        email:document.getElementById("email").value,
     password : document.getElementById("password").value
    }
    
    console.log(objdata)
    if(objdata.name=="" || objdata.email=="" || objdata.password=="" || objdata.lastName=="")
    {
        alert("Please Fill All Details")
     // window.location.reload()
    
    }
    else{
    localStorage.setItem("personalData",JSON.stringify(objdata))

    console.log(objdata.name)

 window.location.href="login.html"
    }

})