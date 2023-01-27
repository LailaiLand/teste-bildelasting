function updateState() {
  model.state = "add";
  updateView();
}

function backToMain() {
  model.state = "main";
  model.input.title = "";
  model.input.img = "";
  updateView();
}

function userUpload(imageToAdd) {
  const inputFile = imageToAdd;
  inputFile.addEventListener("change", () => {
    const temp = inputFile.files;
    model.input.img = URL.createObjectURL(temp[0]);
    console.log(model.input.img);
  });
}

function pushContent() {
  if (model.input.title == "" || model.input.img == "") {
    model.data.incomplete = "Velg både bilde og tittel!";
    updateView();
  } else {
    let temp = {
      title: model.input.title,
      img: model.input.img,
    };
    console.log(temp);
    model.data.image.push(temp);
    model.state = "main";
    updateView();
  }
}
