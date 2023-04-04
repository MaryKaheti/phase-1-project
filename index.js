function displaydata(data) {
    let card = document.createElement("li");
    card.className = "card";
    card.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src=${data.image}class="card-img-top" alt=${data.title}>
  <div class="card-body">
    <p class="card-text">${data.description}</p>
  </div>
</div>`
}