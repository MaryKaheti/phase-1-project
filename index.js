function displayData(data) {
    let card = document.createElement("li");
    card.className = "card ";
    card.innerHTML = `
    <div id="my-data">
    <p><b>Title:</b> ${data.title}</p>
    <p><b>Description:</b> ${data.description}</p>
    <img src = ${data.image} id="image-data">
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
// function pageLoads() {
//     window.addEventListener("mouseover", () => {
//         console.log("Thank you for being here!!")
//     })
// }
// pageLoads()
window.onload = function() {
    alert("Thank you for being here!!");
  }
  

function displayProducts(products){
    let card = ''
    products.forEach(products => {
        card+=`
        <div class = 'card' id="my-card${products.id}">
        <img src = "${products.image}" id="image-product">
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
const form = document.querySelector('#feedback-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting

  // get form data
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const feedback = formData.get('feedback');

  // send data to server
  fetch('/api/feedback', {
    method: 'POST',
    body: JSON.stringify({ name, email, feedback }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    alert('Thank you for your feedback!');
    form.reset();
  })
  .catch(error => {
    console.error(error);
    alert('Oops, something went wrong. Please try again later.');
  });
});


