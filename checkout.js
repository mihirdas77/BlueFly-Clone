

let displaycheckout= document.getElementById("check-det")

let datachk=JSON.parse(localStorage.getItem("addToCartData"))||[];
console.log(datachk)

datachk.forEach((el)=>{
    console.log(el)
   let box1=document.createElement("div")
  let image=document.createElement("img")
   image.src=el.image
   image.style.height="104px"

    let name=document.createElement("h5")
      name.innerText=el.snizeattribute

      let desc=document.createElement("p")
      desc.innerText=el.title

      let price=document.createElement("h4")
      price.innerText="$"+el.price

     
      box1.append(image,name,price);
       box1.setAttribute("id","checkout-box1")
      
      displaycheckout.append(box1)

    })
    let total=document.createElement("p")
    total.innerText="Total  219.00"
    total.setAttribute("id","totalchk")
    displaycheckout.append(total)



    document.getElementById("shipping-btn").addEventListener("click",function(){
        alert("Order Placed")
        window.location.href="index.html"
    })