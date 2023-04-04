function displayData(data) {
    let card = document.createElement("li");
    card.className = "card";
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
function displayProducts(product) {
    let card = document.createElement("li");
    card.className = "card";
    card.innerHTML = `
    <img src=${product.image}class="card-img-top" alt=${product.name}>
    <div class="card-body">
      <p><b>Description:</b>${product.description}</p>
      <a href="#" class="btn btn-primary">${product.price}</a>
    </div> `;
    document.querySelector("#products-list").appendChild(card);

}
function fetchProducts() {
    fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((products) => {
        const productsList = document.querySelector("#products-list");
        products.forEach((item) => {
           const productsItem = document.createElement("li");
           productsItem.className= "product item";
           productsItem.textContent= item.name;
           productsList.appendChild(productsItem);


        })
    })
}
fetchProducts()