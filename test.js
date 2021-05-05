console.log ('ça va papa')
var requestURL = 'https://localhost:8080/server';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var data = request.response;
    populateHeader(data);
  }
  function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['label'];
    header.appendChild(myH1);
  
    var myPara = document.createElement('ol');
    myPara.textContent = 'et ça fait ' + jsonObj['label'] + jsonObj['parentid'];
    header.appendChild(myPara);
  }