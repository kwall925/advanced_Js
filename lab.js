function verify() {
  const userData = document.querySelector(".userData");
  if (userData.value.length == 0) {
  document.querySelector(".here").innerHTML = "Username is a required field!!!!";
  } else {
    console.log(userData.value);
    document.querySelector(".here").innerHTML = "";
  }
}
