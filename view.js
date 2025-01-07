function updateMainView() {
  let html = "";
  model.data.image.map((image) => {
    html += image.title;
    html += `<img src='${image.img}'/><br>`;
  });
    html += /*HTML*/ `
    <video width="400" controls>
      <source src="IMG/d52ea71487d81c32938231511d4c3406.mp4" type="video/mp4">
    </video>
    <p>Kanskje se på å legge til en videoliste senere, men for nå så quickfix</p>
    `;
    html += /*HTML*/ `
    <video width="400" controls>
      <source src="IMG/kino.mp4" type="video/mp4">
    </video>
    <p>Kan jo dele opptil 100mb på discord om du har link heller enn fil...</p>
    `;
    html += /*HTML*/ `
    <video width="400" controls>
      <source src="IMG/Blod og medisin.mp4" type="video/mp4">
    </video>
    <p>Burde laget video-script snart???</p>
    `;
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
