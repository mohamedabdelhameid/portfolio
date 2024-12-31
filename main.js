let hide = document.getElementById("Hide");
let hider = document.getElementById("iBars");
let dark = document.getElementById("modeDark");
let Body = document.getElementById("Boody");
let navbar = document.getElementById("NavBar");
let immg = document.getElementById("img2projecT");
let immg12 = document.getElementById("imgIndiv22imagge");
let ddaarrkk = document.getElementById("FooT");
let ddaarrkk2 = document.getElementById("ThX");
let Cont = document.getElementById("conTact");
let exP = document.getElementById("experIence");
let PRoO = document.getElementById("PROjects");
let abU = document.getElementById("About");
let theme_switch = document.getElementById("theme_switch");
let send = document.getElementById("submits");
let inpts = document.querySelector("form");

function hiddden() {
  if (hide.innerHTML === "") {
    hide.innerHTML = `
    <a href="#Home" onclick="hidder()">Home</a>
    <a href="#About" onclick="hidder()">About</a>
    <a href="#PROjects" onclick="hidder()">Projects</a>
    <a href="#experIence" onclick="hidder()">Experiences</a>
    <a href="#conTact" onclick="hidder()">Contact</a>
    `;
    hide.style.display = "unset";
    hider.setAttribute("class", "fa-solid fa-xmark");
  } else {
    hide.innerHTML = "";
    hide.style.display = "none";
    hider.setAttribute("class", "fa-solid fa-bars-staggered");
  }
}

function hidder() {
  hiddden();
  hide.innerHTML = "";
  hider.setAttribute("class", "fa-solid fa-bars-staggered");
}

let darkmode = localStorage.getItem("darkmode");

function lighting() {
  Body.classList.add("bodyDark");
  dark.setAttribute("class", "fa-solid fa-sun mode text-light");
  navbar.setAttribute("class", "navBar bg-dark");
  immg12.setAttribute("src", "image/OIP1dark.jpeg");
  ddaarrkk.setAttribute("class", "FooTer bg-dark mb-0 mt-3");
  Cont.setAttribute("class", "conTact bg-dark");
  exP.setAttribute("class", "experIence bg-dark");
  PRoO.setAttribute("class", "proJects bg-dark");
  abU.setAttribute("class", "aBout bg-dark");
  localStorage.setItem("darkmode", "active");
}

function darking() {
  dark.setAttribute("class", "fa-solid fa-moon text-dark mode");
  dark.setAttribute("class", "fa-solid fa-moon mode");
  navbar.setAttribute("class", "navBar bg-light");
  immg12.setAttribute("src", "image/R1light.jpg");
  ddaarrkk.setAttribute("class", "FooTer bg-light mb-0 mt-3");
  Cont.setAttribute("class", "conTact bg-light");
  exP.setAttribute("class", "experIence bg-light");
  PRoO.setAttribute("class", "proJects bg-light");
  abU.setAttribute("class", "aBout bg-light");
  Body.classList.remove("bodyDark");
  localStorage.setItem("darkmode", null);
}

if (darkmode === "active") lighting();

theme_switch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? lighting() : darking();
});

let btn = document.getElementById("btn0012");

window.onscroll = () => {
  if (scrollY >= 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = () => {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

send.addEventListener("click", () => {
  setTimeout(() => {
    inpts.reset();
  }, 800);
});
