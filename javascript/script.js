function togglePopup(event) {
  event.preventDefault();
  document.getElementById("window").classList.toggle("active");
}
function togglePopup() {
  var blur = document.getElementById("blur");
  var window = document.getElementById("window");
  blur.classList.toggle("active");
  window.classList.toggle("active");
}
function togglePopup_2(event) {
  event.preventDefault();
  document.getElementById("window_2").classList.toggle("active");
}
function togglePopup_2() {
  var blur = document.getElementById("blur");
  var window = document.getElementById("window_2");
  blur.classList.toggle("active");
  window_2.classList.toggle("active");
}

// selection options
const selectBtn = document.getElementById("selectfield");
const text = document.getElementById("selectText");
const option = document.getElementsByClassName("option");
var titel = document.getElementById("title");
var valoption = document.getElementsByClassName("option").value;
var prixplace = document.getElementById("prix");

selectBtn.addEventListener("click", function () {
  selectBtn.classList.toggle("active");
});

for (options of option) {
  options.onclick = function () {
    text.innerHTML = this.textContent;
    titel.innerHTML = this.textContent;
    prixplace.innerHTML = this.value + "$";

    selectBtn.classList.remove("active");
  };
}
const selectBtn_2 = document.getElementById("selectfield_2");
const text_2 = document.getElementById("selectText_2");
const option_2 = document.getElementsByClassName("option_2");
var prix_2 = document.getElementById("prix_2");
var title_2 = document.getElementById("title_2");
selectBtn_2.addEventListener("click", function () {
  selectBtn_2.classList.toggle("active");
});
for (options of option_2) {
  options.onclick = function () {
    text_2.innerHTML = this.textContent;
    title_2.innerHTML = this.textContent;

    prix_2.innerHTML = this.value + "$";

    selectBtn_2.classList.remove("active");
  };
}

//  categories script

// const title =document.getElementsById('title');

// const title_2 =document.getElementsById('title_2');
