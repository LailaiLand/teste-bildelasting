function updateMainView() {
  let html = "";
  model.data.image.map((image) => {
    html += image.title;
    html += `<img src='${image.img}'/>`;
  });
  html += `
    <button onclick="${model.state = "add"}, updateView()">Legg til</button>
  `;
  site.innerHTML = html;
}

function updateAddView(){
    
}
