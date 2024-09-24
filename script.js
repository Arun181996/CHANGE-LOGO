// Function to change the logo image on mouseover
function changelogo() {
  const logo = document.getElementById("logo");
  logo.src = "./images/img2.png"; // Replace with the new image path
}

// Function to revert back to the original logo on mouseout
function reset() {
  const logo = document.getElementById("logo");
  logo.src = "./images/img1.jpg"; // Replace with the original image path
}

let heading = document.getElementById("head");
heading.innerText = "you have been hacked!";

//heading.innerHTML = "<b>you have been hacked!<b>";

heading.style.color = "rgb(89,161,201)";

let para = document.getElementsByClassName("text");
para[0].style.border = "3px soild blue";
para[1].setAttribute("hidden", true);
para[1].removeAttribute("hidden", true);

let a = document.querySelector("#head");
a.innerText = "hello world";

let b = document.querySelector("div p");
b.style.color = "red";
