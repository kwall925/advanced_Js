const init = () => {
  let btn = document.querySelector("#weather-btn");
  btn.addEventListener("click", jsonEvent);
}

const jsonEvent = () => {
let xhr = new XMLHttpRequest();
let url = "http://api.geonames.org/postalCodeSearchJSON";
let params = "?username=kwall925&countryCode=US&postalcode=" + document.querySelector("#zip-input").value;
xhr.open("get", url + params);
xhr.onreadystatechange = () => {
  if(xhr.readyState == 4){
let jsObjectData = JSON.parse(xhr.responseText);
let lattitude = jsObjectData.postalCodes[0].lat;
let longitude = jsObjectData.postalCodes[0].lng;
let coords = {lattitude, longitude};
getWeather(coords);
let city = jsObjectData.postalCodes[0].placeName;
document.querySelector("#city").innerHTML = city + " current conditions:";
  }
}
xhr.send(null);
}

const getWeather = location => {
  let xhr = new XMLHttpRequest();
  let url = `http://api.geonames.org/findNearByWeatherJSON?lat=${location.lattitude}&lng=${location.longitude}&username=kwall925`;
  xhr.open("get", url);
  xhr.onreadystatechange = () => {
    if(xhr.readyState == 4){
      let results = JSON.parse(xhr.responseText);
     let temp = results.weatherObservation.temperature;
     printTemp(temp);
     let wind = results.weatherObservation.windSpeed;
     document.querySelector("#windResult").innerHTML = "Wind: " + wind + " mph";
     if(wind > 15){
       let windimg = document.createElement('img');
       windimg.src = "images/wind.jpg";
       windimg.height = 80;
       document.querySelector("#windy").appendChild(windimg);
     }
    }
  }
  xhr.send(null);
}

const printTemp = cels => {
  let farenheit = Math.round((cels * 9) / 5 + 32);
  document.querySelector("#weatherResult").innerHTML = farenheit + "°";
  document.querySelector("#hotncold").innerHTML = "";
  if (farenheit >= 83){
    let fireimg = document.createElement('img');
    fireimg.src = "images/fire.png";
    fireimg.height = 80;
    document.querySelector("#hotncold").appendChild(fireimg);
  } else if (farenheit <= 34){
    let coolimg = document.createElement('img');
    coolimg.height = 80;
    coolimg.src = "images/snow.jpg";
    document.querySelector("#hotncold").appendChild(coolimg);
  }
}

window.onload = init;




/*const init = () => {
  let btn = document.querySelector("#weather-btn");
  btn.addEventListener("click", jsonEvent);
}

const jsonEvent = () => {
let xhr = new XMLHttpRequest();
let url = "http://api.geonames.org/postalCodeSearchJSON";
let params = "?username=kwall925&countryCode=US&postalcode=" + document.querySelector("#zip-input").value;

xhr.open("get", url + params);

xhr.onreadystatechange = () => {
  if(xhr.readyState == 4){
  // console.log(xhr.responseText);
let jsObjectData = JSON.parse(xhr.responseText);
let lattitude = jsObjectData.postalCodes[0].lat;
let longitude = jsObjectData.postalCodes[0].lng;
//let coords = {"lattitude": lattitude, "longitude": longitude};
let coords = {lattitude, longitude};
//document.querySelector("#weatherResult").innerHTML =
//console.log(coords);
getWeather(coords);
  }
}
xhr.send(null);
}

const getWeather = location => {
  let xhr = new XMLHttpRequest();
  let url = `http://api.geonames.org/findNearByWeatherJSON?lat=${location.lattitude}&lng=${location.longitude}&username=kwall925`;
  //location of our weather data
  //let coords = `${location.lattitude}${location.longitude}`;
//  let params = "?username=kwall925&countryCode=US&postalcode=";
  //let params = `?username=kwall925&countryCode=US&postalcode=${location.lattitude}${location.longitude}`;
  //console.log(coords);
  //permission to access data
  xhr.open("get", url);
  //request data with permission
  xhr.onreadystatechange = () => {
    //function to recieve data
    if(xhr.readyState == 4){
      //if our data is ready...
      console.log(xhr.responseText);
      let results = JSON.parse(xhr.responseText);
      console.log(results);

     let temp = results.weatherObservation.temperature;
     console.log(temp);
     printTemp(temp);
     let wind = results.weatherObservation.windSpeed;
     console.log(wind);
    }
  }
  xhr.send(null);
}

//function for temperature
const printTemp = cels => {
  let farenheit = Math.round((cels * 9) / 5 + 32);
  //console.log(farenheit);
  document.querySelector("#weatherResult").innerHTML = farenheit + " °";
  let fireimg = document.createElement('img');
  fireimg.src = "images/fire.png";
  fireimg.height = 150;
  let coolimg = document.createElement('img');
  coolimg.height = 150;
  coolimg.src = "images/snow.jpg"
  if (farenheit >= 83){
    document.querySelector("#hotncold").appendChild(fireimg);
  } else if (farenheit <= 34){
    document.querySelector("#hotncold").appendChild(coolimg);
  }
}

/*
//function for windy
const windy = windres =>{
  if (){
    document.querySelector("#windy").innerHTML =
  }
}*/
window.onload = init;


/*const init = () => {
  let btn = document.querySelector("#weather-btn");
  btn.addEventListener("click", jsonEvent);
}

const jsonEvent = () => {
let xhr = new XMLHttpRequest();
let url = "http://api.geonames.org/postalCodeSearchJSON";
let params = "?username=kwall925&countryCode=US&postalcode=" + document.querySelector("#zip-input").value;

xhr.open("get", url + params);

xhr.onreadystatechange = () => {
  if(xhr.readyState == 4){
   console.log(xhr.responseText);
let jsObjectData = JSON.parse(xhr.responseText);
let lattitude = jsObjectData.postalCodes[0].lat;
let longitude = jsObjectData.postalCodes[0].lng;
let coords = {"lattitude": lattitude, "longitude": longitude};
//document.querySelector("#weatherResult").innerHTML =
 getWeatherInfo(coords);
  }
}
xhr.send(null);
}

let getWeatherInfo = () => {
  let xhr = new XMLHttpRequest();
  let url = "http://api.geonames.org/findNearByWeatherJSON";
  let params = "?username=kwall925&countryCode=US&postalcode="
  xhr.open("get", url + params);

  xhr.onreadystatechange = () => {
    if(xhr.readyState = 4){
    //  console.log(coords);
    }
  }
  xhr.send(null);
}

window.onload = init;*/







































/*const init = () => {
let weathbtn = document.querySelector("#weather-btn");
//  weathbtn.onclick = getweath;
weathbtn.onclick = getCoordinates;
//getWeatherInfo(coords);
}//end init


const getCoordinates = () => {` `
let xhr = new XMLHttpRequest();
let url = "http://api.geonames.org/postalCodeSearchJSON";
let params = "?username=kwall925&countryCode=US&postalcode=" + document.querySelector("#zip-input").value;
xhr.open("get", url + params);
//callback
xhr.onreadystatechange = () => {
  if(xhr.readyState == 4) {
 //console.log(xhr.responseText);
 let jsObjectData = JSON.parse(xhr.responseText);
 let lattitude = jsObjectData.postalCodes[0].lat;
 let longitude = jsObjectData.postalCodes[0].lng;
 //console.log(`latitude: ${latitude}\nLongitude: ${longitude}`);
 let coords = {"latitude": latitude, "longitude": longitude};
 getWeatherInfo(coords);
 document.querySelector("#weatherResult").innerHTML = jsObjectData;
}
//}
xhr.send(null);
}
window.onload = init;




/*let getweath = () => {
  console.log("congrats!");
}

/*const init = () => {
document.querySelector("#weather-btn").onclick = getWeath();
}//end init

const getWeath = () => {
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200){
    document.querySelector("#weatherResult").innerHTML = xhr.responseText;
    let url = "http://api.geonames.org/postalCodeSearchJSON";
    let params = "?username=kwall925&countryCode=US&postalcode=" + document.querySelector("#zip-input").value;
    xhr.open("GET", url + params, true);
    xhr.send();
  }
}
*/
//}
//window.onload = init;
