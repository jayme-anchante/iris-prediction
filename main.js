var sepal_length = document.querySelector("#sepal_length");
var sepal_width = document.querySelector("#sepal_width");
var petal_length = document.querySelector("#petal_length");
var petal_width = document.querySelector("#petal_width");
var buttonElement = document.querySelector("#app button");

function getInputArray() {
  var inputArray = [sepal_length.value, sepal_width.value, petal_length.value, petal_width.value];
  return inputArray
}

function returnIris(value) {
  switch (value) {
    case 0:
      return "Setosa";
    case 1:
      return "Versicolor";
    case 2:
      return "Virginica";
    default:
      return "Other iris!";
  }
};

function predict() {
  var inputArray = getInputArray();
  var clf = new RandomForestClassifier();
  var numberedPrediction = clf.predict(inputArray);
  var prediction = returnIris(numberedPrediction);
  console.log(prediction);
}

buttonElement.onclick = predict;
