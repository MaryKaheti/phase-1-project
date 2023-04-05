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
// pageLoads()
// function pageLoads() {
//     window.addEventListener("mouseover", () => {
//         alert("Thank you for being here!!")
//     })
// }
function displayProducts(products){
    let card = ''
    products.forEach(products => {
        card+=`
        <div class = 'card' id="my-card${products.id}">
        <img src = "${products.image}">
        <p> ${products.description}</p>
        <p> ${products.price}</p>
        <button type='button' id="my-btn" padding-bottom = "20px">Buy</button>
        <button type='button' id="mydelete${products.id}" padding-bottom = "20px">Delete</button>
        </div>
        `

        document.querySelector("#products-list").innerHTML = card

deleteProduct(products)
});
}
function fetchProducts() {
    fetch(" http://localhost:3000/products")
    .then(res => res.json())
    .then(products => displayProducts(products))



}
fetchProducts()
function deleteProduct(products){

    let deletebtn = document.getElementById(`mydelete${products.id}`)
    deletebtn.addEventListener('click', (event) => {
        console.log('reaches')
fetch(`http://localhost:3000/products/${products.id}`, 
{
    method: 'DELETE',
}).then((response)=>{
if(response.OK){
console.log('success')
document.getElementById(`my-card${products.id}`).innerHTML = "";
}else{
console.log('failed')
}
});
})
}

function updateProducts(products) {
    let updatebtn = document.getElementById()
}