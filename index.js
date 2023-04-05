function displayData(data) {
    let card = document.createElement("li");
    card.className = "card col-2 m-2";
    card.innerHTML = `
    <div>
    <p><b>Title:</b> ${data.title}</p>
    <p><b>Description:</b> ${data.description}</p>
    <img src = ${data.image}>
    </div>
    
    `;
    document.querySelector("#data-list").appendChild(card);
}
function fetchData() {
    fetch("http://localhost:3000/data")
    .then((res) => res.json())
    .then((data) => {
        
        const dataList = document.querySelector("#data-list");
        
        data.forEach((item) => {
            const dataItem = document.createElement("li");
            dataItem.className= "data item";
            dataItem.textContent= item.title;
            dataList.appendChild(dataItem);
            dataItem.addEventListener("click", () => {
                displayData(item)
            })
        })
    })
    .catch((error)=> console.log(error));
}
fetchData();

function pageLoads() {
    window.addEventListener("mouseover", () => {
        
    })
}
console.log(alert ("Thank you for being here..."))
function displayProducts(products){
    let card = ''
    products.forEach(products => {
        card+=`
        <div class = 'card' id="my-card">
        <img src = "${products.image}">
        <p> ${products.description}</p>
        <p> ${products.price}</p>
        <button id="my-btn" padding-bottom = "20px">Buy</button>
        </div>
        `
    });
    document.querySelector("#products-list").innerHTML = card
}
function fetchProducts() {
    fetch(" http://localhost:3000/products")
    .then(res => res.json())
    .then(products => displayProducts(products))
}
fetchProducts()