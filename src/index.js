import "./scss/main.scss";

const langSwitchers = document.querySelectorAll(".lang-switcher");

for (let langSwitcher of langSwitchers) {
  langSwitcher.addEventListener("click", () => {
    langSwitcher.classList.toggle("open");
    if (langSwitcher.classList.contains("open")) {
      setTimeout(() => {
        langSwitcher.children[0].style.display = "block";
      }, 300);
    } else {
      langSwitcher.children[0].style.display = "none";
    }
  });
}

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
  burgerMenu.firstElementChild.classList.toggle("open");
});

//localStorage.clear();

// let visit, name;
// if (localStorage.getItem("visit")) {
//   visit = localStorage.getItem("visit");
//   name = localStorage.getItem("name");
//   visit++;
//   localStorage.setItem("visit", visit);
// } else {
//   visit = 1;
//   name = `visitor №${Math.floor(Math.random() * 100)}`;
//   localStorage.setItem("visit", visit);
//   localStorage.setItem("name", name);
// }

// fetch(`https://api.telegram.org/bot1669407615:AAEAiMTRk1oAwcPJXwVxFqHGXgh43Zha7_8/sendMessage?chat_id=-523200031&text=ByFax-test: ${visit} - ${name}; ${navigator.userAgent}`);
