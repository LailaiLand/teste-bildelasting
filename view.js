function updateMainView() {
  let html = "";
  model.data.image.map((image) => {
    html += image.title;
    html += `<img src='${image.img}'/><br>`;
  });
  html += `
    <button onclick="updateState()">Legg til</button>
  `;
  site.innerHTML = html;
}

function updateAddView() {
  let html = /*HTML*/ `
  <h1>Legg til bilde</h1> <br>
  <input type="text" placeholder="legg til tittel" onchange="model.input.title = this.value"><br>
  <input type="file" oninput="userUpload(this)" accept="image/jpeg, image/png, image/jpg">
  <button onclick="pushContent()">Legg til liste</button> <br>
  <p>${model.data.incomplete}</p>
  <button onclick="backToMain()">
        Cancel
    </button>
  `;
  site.innerHTML = html;
}
