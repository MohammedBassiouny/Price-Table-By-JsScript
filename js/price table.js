var allproducts = document.querySelectorAll("#product")
var Basket = document.querySelector("#Basket")
var price = document.querySelector("#price")
var products = document.querySelector("#product h5")
var showprice = document.querySelector("#totalprice")
var pricevalue = document.querySelector("#pricevalue")
var div1 = document.querySelector("#div1")
var totalprice=0

 
allproducts.forEach (
    function (item) {
        item.querySelector("#select").onclick = function () {
           totalprice += +(item.querySelector("#price").getAttribute("price"))
            Basket.innerHTML += "(" + item.querySelector(".card-title").textContent + ")" + " "
        }
    }
)

showprice.onclick = function () {
pricevalue.innerHTML = totalprice + "EGP";

}

if (Basket.innerHTML !="") {
    document.getElementById(".div1").style.opacity ="1"

}
