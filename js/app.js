var myArray = []
myArray["name"] = "Matz";
myArray["language"] = "Ruby";
myArray["country"] = "Japan";

function displayArray() {
  var ResultsDiv = document.getElementById('resultsDiv');
  for(k in myArray) {
    var ChildDiv = document.createElement('div');
    ChildDiv.innerHTML = myArray[k];
    ResultsDiv.appendChild(ChildDiv);
  }
}

function addToArray() {
  console.log("in AddToArray!");
};