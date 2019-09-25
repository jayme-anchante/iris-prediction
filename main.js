var sepal_length = document.querySelector("#sepal_length");
var sepal_width = document.querySelector("#sepal_width");
var petal_length = document.querySelector("#petal_length");
var petal_width = document.querySelector("#petal_width");
var buttonElement = document.querySelector("#app button");
var resultElement = document.querySelector("#result");

function getInputArray() {
  var inputArray = [sepal_length.value, sepal_width.value, petal_length.value, petal_width.value];
  return inputArray
}

function returnIris(value) {
  switch (value) {
    case 0:
      return "setosa";
    case 1:
      return "versicolor";
    case 2:
      return "virginica";
    default:
      return "not a valid iris...";
  }
};

function createResultImg(prediction) {
  var resultElementImg = document.createElement("img");
  resultElementImg.setAttribute("src", "assets/"+prediction+".jpeg");
  resultElementImg.setAttribute("alt", prediction);
  resultElementImg.setAttribute("height", 100);
  return resultElementImg
};

function createResultText(prediction) {
  var resultElementDiv = document.createElement("div");
  var resultElementText = document.createTextNode(prediction);
  resultElement.innerHTML = "";
  resultElementDiv.appendChild(resultElementText);
  return resultElementDiv
};

function showResult(prediction) {
  resultElementDiv = createResultText(prediction);
  resultElementImg = createResultImg(prediction);
  resultElement.appendChild(resultElementDiv);
  resultElement.appendChild(resultElementImg);
};

function predict() {
  var inputArray = getInputArray();
  var clf = new RandomForestClassifier();
  var numberedPrediction = clf.predict(inputArray);
  var prediction = returnIris(numberedPrediction);
  showResult(prediction);
};

buttonElement.onclick = predict;
