const init = () => {
  console.log("init");

  //Square Footage
  let sqftg;
  let sqbutton = document.querySelector('.sqbutton');
  sqbutton.onclick = function() {
  sqftg = document.querySelector('#sqinput').value;
  document.querySelector('.sq-ft').innerHTML = "Your desired house size is " + sqftg + " square feet";
  console.log(sqftg);
}
  let s1 = document.querySelector("#onestory");
  let s2 = document.querySelector("#twostory");
  let estButton = document.querySelector('#estButton');

let storVal;

  s1.onclick = function(){//update functions to modern
    if(sqftg == 0 || sqftg == " "){
      alert("please enter a valid square footage before continuing");
      }else{
    storVal = 175 * parseInt(sqftg);
    document.querySelector('.size').innerHTML = "1 Story: Your house will be billed at $175 per square foot.";
    console.log(storVal);
  }
  }


  s2.onclick = function(){
    if(sqftg == 0 || sqftg == " "){
      alert("please enter a valid square footage before continuing");
      }else{
    storVal = 135 * parseInt(sqftg);
    document.querySelector('.size').innerHTML = "2 Story: Your house will be billed at $135 per square foot.";
    console.log(storVal);
 }
}

//colors
let colors = document.querySelectorAll('.colors');
let colorblk = document.querySelectorAll('.color-block');


for ( let i = 0; i < colors.length; i++ ) (function(i){
  colors[i].onclick = function() {
    document.querySelector('.color').innerHTML = "Your house will be " + this.outerText;
  }
})(i);

//Material Selection Function
//const materials = () => {
  let vinyl = document.querySelector('.vinyl');
  let wood = document.querySelector('.wood');
  let brick = document.querySelector('.brick');
  let stucco = document.querySelector('.stucco');
  let stone = document.querySelector('.stone');
  let materialVal;

  vinyl.onclick = function(){
    materialVal = 0;
    console.log(materialVal);
    document.querySelector('.exterior').innerHTML = "You selected a vinyl exterior. No additional charge has been factored into your house estimate.";
  }

  wood.onclick = function(){
   materialVal = 5000 + (10 * parseInt(sqftg));
   console.log(materialVal);
     document.querySelector('.exterior').innerHTML = "You selected a wood exterior. A $5,000 charge has been factored into your house estimate, plus an additional $10 per square foot.";
}

brick.onclick = function(){
  materialVal = 8000 + (10 * parseInt(sqftg, 10));
  console.log(materialVal);
    document.querySelector('.exterior').innerHTML = "You selected a brick exterior. An $8000 charge has been factored into your house estimate, plus an additional $10 per square foot.";
}

stucco.onclick = function(){
  materialVal = 6000;
  console.log(materialVal);
    document.querySelector('.exterior').innerHTML = "You selected a stucco exterior. A $6000 charge has been factored into your house estimate.";
}

stone.onclick = function(){
  materialVal = 16000;
  console.log(materialVal);
    document.querySelector('.exterior').innerHTML = "You selected a stone exterior. A $16,000 charge has been factored into your house estimate.";
}

//garage
let g1 = document.querySelector('.g1');
let g2 = document.querySelector('.g2');
let g3 = document.querySelector('.g3');
let garageVal;

g1.addEventListener('click', function(){
  if(g1.checked = true){
    garageVal = 15000;
    document.querySelector('.garagebox').innerHTML = "You selected a 1 car garage. $15,000 was added to your house estimate.";
    document.querySelector('.garage-block').innerHTML = '';
    console.log(garageVal);
  } else if (g1.checked = false){
    garageVal = 0;
  }
},);

g2.addEventListener('click', function(){
  if(g2.checked = true){
    garageVal = 30000;
    document.querySelector('.garagebox').innerHTML = "You selected a 2 car garage. $30,000 was added to your house estimate.";
    document.querySelector('.garage-block').innerHTML = '';
    console.log(garageVal);
  } else if (g2.checked = false){
    garageVal = 0;
  }
},);

g3.addEventListener('click', function(){
  if(g3.checked = true){
    garageVal = 45000;
    document.querySelector('.garagebox').innerHTML = "You selected a 3 car garage. $45,000 was added to your house estimate.";
    document.querySelector('.garage-block').innerHTML = '';
    console.log(garageVal);
  } else if (g3.checked = false){
    garageVal = 0;
  }
},);

//calculator
estButton.onclick = function(){
  let finalEst = storVal + materialVal + garageVal; //+ parseInt(sqftg);
document.querySelector("#estButton").innerHTML = 'Your Final Estimate: $' + finalEst;
}

}
