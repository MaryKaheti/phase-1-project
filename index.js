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
