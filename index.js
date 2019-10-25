const init = () => {
//button section 2
let average = document.querySelector('.average');
average.value = 99;
average.onclick = dotNotation;

let good = document.querySelector('.good');
good.value = "good";
good.onclick = dotNotation;

let excellent = document.querySelector('.excellent');
excellent.value = "excellent";
excellent.onclick = dotNotation;
//button section 3
let tall = document.querySelector('.tall');
tall.value = "tall";
tall.addEventListener('click', w3c);

let med = document.querySelector('.med');
med.value = "average";
med.addEventListener('click', w3c);

let short = document.querySelector('.short');
short.value = "short";
short.addEventListener('click', w3c);
}//end init

const dotNotation = () =>{
  console.log(this.document.activeElement.value);
}

const inline = () =>{
  let red = document.querySelector('.red');
  -let blue = document.querySelector('.blue');
  let green = document.querySelector('.green');
  console.log(this.document.activeElement.value);
}

const w3c = () => {
  console.log(this.document.activeElement.value);
}
