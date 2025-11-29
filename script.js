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
    })
}

getProducts()
function drawProducts(){
main.innerHTML = ""
products.forEach(p=>{
    main.innerHTML += `
    <div class="product">
    <h3>${p.name}</h3>
    <a href="/seller/${p.user_id}">Seller parge</a>
    <p class="price">${p.price} грн</p>

        <p class="desc">${p.description || "Описание отсутствует"}</p>

    <div/>
    `
})
function drawProducts(){
     
}
}