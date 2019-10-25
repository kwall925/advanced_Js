const init = () => {
let target = document.querySelector("#target");
target.addEventListener("click", action);
}

const action = () => {
//  console.log('you');
  let xhr =  new XMLHttpRequest();
  let url = "ajax.xml";
  xhr.open("get", url);
  xhr.onreadystatechange = () => {
    if(xhr.readyState == 4) {
      processX(xhr.responseXML);
    }
  }
  xhr.send(null);
}


const processX = xmlParser => {
//  let xmlParser = new //DOMParser().parseFromString("main", "ajax.xml");
  let process = xmlParser.getElementsByTagName("text")[0];
  let p2 = process.childNodes[0];
  let p3 = p2.textContent;
  //let process = xmlParser.getElementsByTagName("main")[0].nodeValue;
//  let theProcess = process.nodeValue;
//let process = xmlParser.getElementsByTagName("text")[0];
//let theProcess = process.childNodes[0].nodeValue;
  console.log(p3);
}
window.onload = init;
