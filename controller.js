function userUpload(imageToAdd) {
  const inputFile = imageToAdd;
  inputFile.addEventListener("change", () => {
    const temp = inputFile.files;
    console.log(temp);
  });
}
