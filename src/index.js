import "./scss/main.scss";

const langSwitcher = document.querySelector(".lang-switcher");
const langList = document.querySelector(".lang-list");

langSwitcher.addEventListener("click", () => {
  langSwitcher.classList.toggle("open");
  if (langSwitcher.classList.contains("open")) {
    setTimeout(() => {
      langList.style.display = "block";
    }, 300);
  } else {
    langList.style.display = "none";
  }
});

const langItems = document.querySelectorAll(".lang-item");
for (let lang of langItems) {
  lang.addEventListener("click", (event) => {
    if (event.target.innerText == "ENG") {
      alert("Sorry, English is not supported yet");
    }
  });
}

const serviceTabs = document.querySelectorAll(".service-tab");
const serviceDesc = document.querySelectorAll(".service-desc");

for (let i = 0; i < serviceTabs.length; i++) {
  serviceTabs[i].addEventListener("click", () => {
    for (let desc of serviceDesc) {
      desc.classList.remove("active");
    }
    for (let tab of serviceTabs) {
      tab.classList.remove("active");
    }
    serviceDesc[i].classList.add("active");
    serviceTabs[i].classList.add("active");
  });
}

const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("open");
});

