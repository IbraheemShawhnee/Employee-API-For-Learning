let myRequest = new XMLHttpRequest();
myRequest.open("GET", "api.json", true);
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let myJavaScriptObject = JSON.parse(this.responseText);
    for (let i = 0; i < myJavaScriptObject.data.length; i++) {
      let divForID = document.createElement("div");
      let divForNames = document.createElement("div");
      var repoNodeCon = document.createTextNode(myJavaScriptObject.data[i].id);
      divForID.appendChild(repoNodeCon);
      document.body.appendChild(repoNodeCon);
      var repoNodeCon = document.createTextNode(
        myJavaScriptObject.data[i].employee_name
      );
      document.body.appendChild(repoNodeCon);
      var breakline = document.createElement("br");
      document.body.appendChild(breakline);
    }
  }
};
