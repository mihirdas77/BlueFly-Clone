let data=JSON.parse(localStorage.getItem("personalData"))||[]
console.log(data)


document.getElementById("signIn").addEventListener("click",function(){
  event.preventDefault()
  let logindata={
 email:document.getElementById("email").value,
 password:document.getElementById("password").value
}
    if(data.email==logindata.email && data.password==logindata.password)
    {
      alert("Login Successfully")
      window.location.href="index.html"
    }
    else{
      alert("Wrong Credentials")
    }
})
