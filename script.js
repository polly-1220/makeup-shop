const Base_Url = "https://my-json-server.typicode.com/polly-1220/makeup-shop"
let main = document.querySelector("main")
let products =[]

function getProducts(){
    fetch(Base_Url +  "/products")
    .then(async (res)=>{
        let data = await res.json()
        console.log(data)
        products = data
        drawProducts()
        drawCart()
    })
}

getProducts()



function drawProducts(){
main.innerHTML = ""
products.forEach(p=>{
    main.innerHTML += `
    <div class="product">
    <h3>${p.name}</h3>
    <a href="/seller.html?id=${p.user_id}">Seller parge</a>
    <button onclick = "addProductCart(${p.id})">Купити!<button/>
    <p class="price">${p.price} грн</p>

        <p class="desc">${p.description || "Описание отсутствует"}</p>

    <div/>
    `
})
function drawProducts(){
     
}
}


let cartButton = document.getElementById("cart")
let cart = document.querySelector(".cart")

let cartIsOpen = false
cartButton.addEventListener("click", function(){
    cartIsOpen = !cartIsOpen
    cart.style.display = cartIsOpen ? "flex" : "none"
})

let cartArray = []

function addProductCart(product_id){
    console.log(product_id)
    cartArray.push(product_id)
    localStorage.setItem("cart", JSON.stringify(cartArray))
    drawCart()
}

function drawCart(){
    if (cartArray.length == 0 ){
        cart.innerHTML = "djjkjijhi"
        return
    }
    let cartProducts = products.filter(p=>cartArray.indexOf(p.id) > -1)
    cartProducts = cartProducts.map(p => ({
        ...p,
        count: cartArray.filter(prod=>prod == p.id).length
    }))
    console.log(cartProducts)
    cart.innerHTML = cartProducts.map(p=>`<li>${p.name} | $${p.price} | x${p.count}</li>`).join("")
    cart.innerHTML += "<button onclick='clearCart()'>vexjhrf</button>"
}

function clearCart(){
    cartArray.length = 0
    localStorage.setItem("cart", "[]")
    drawCart();
}

cartArray = JSON.parse(localStorage.getItem("cart")) || []
drawCart()