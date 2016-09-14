var myArray = []
myArray["name"] = "Matz";
myArray["language"] = "Ruby";
myArray["country"] = "Japan";

function displayArray() {
  var ResultsDiv = document.getElementById('resultsDiv');
  ResultsDiv.innerHTML = '';
  for(k in myArray) {
    var ChildDiv = document.createElement('div');
    ChildDiv.innerHTML = myArray[k];
    ResultsDiv.appendChild(ChildDiv);
  }
}

function addToArray() {
  var key = document.getElementById('key').value;
  var value = document.getElementById('value').value;

  myArray[key] = value;

  displayArray();
};