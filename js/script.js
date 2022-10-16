new WOW().init();
const at1 = Atropos({
  el: ".at1",
});
const at2 = Atropos({
  el: ".at2",
});
const at3 = Atropos({
  el: ".at3",
  shadowOffset: 10,
});

(function () {
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function forEach(callback, thisArg) {
      if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
      }
      var array = this;
      thisArg = thisArg || this;
      for (var i = 0, l = array.length; i !== l; ++i) {
        callback.call(thisArg, array[i], i, array);
      }
    };
  }
})();
const tabItem = document.querySelectorAll(".tab-item ");
const tabContent = document.querySelectorAll(".tab-content__item");
const topBtn = document.getElementsByClassName("topBtn")[0];
const mobileV = document.getElementsByClassName("mobile-v")[0];
const headerList = document.getElementsByClassName("header-list")[0];
const recordBtn = document.getElementsByClassName("record-btn")[0];
const modalWin = document.getElementsByClassName("record-modal")[0];
const mdContainer = document.getElementsByClassName("modal_container")[0];
const closeModal = document.getElementsByClassName("modal-btn__close")[0];

tabItem.forEach((item, index) => {
  item.addEventListener("click", function () {
    for (let e = 0; e < tabItem.length; e++) {
      tabItem[e].classList.remove("item-tab__active");
      tabContent[e].classList.remove("content__item--hidden");
      tabContent[e].classList.remove("animate__fadeIn");
    }
    tabContent[index].classList.add("content__item--hidden");
    tabContent[index].classList.add("animate__fadeIn");
    tabItem[index].classList.add("item-tab__active");
  });
});

mobileV.addEventListener("click", function () {
  headerList.classList.toggle("mobile-active");
  this.classList.toggle("mobile-active");
});

window.addEventListener("scroll", function () {
  this.scrollY >= 470
    ? topBtn.classList.add("toActive")
    : topBtn.classList.remove("toActive");
});
const toActive = document.getElementsByClassName("toActive")[0];
function scrolling() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  topBtn.removeEventListener("click");
}
topBtn.addEventListener("click", function () {
  scrolling();
});
if (window.innerWidth <= 991) {
  topBtn.classList.add("toRight");
  headerList.classList.remove("animate__animated");
  headerList.classList.remove("animate__backInDown");
  headerList.classList.remove("wow");
}
recordBtn.addEventListener("click", function () {
  modalWin.classList.add("active__modal");
  modalWin.classList.add("animate__bounceInDown");
  document.body.classList.add("body_lock");
  mdContainer.classList.add("bg_active");
});
closeModal.addEventListener("click", function () {
  modalWin.classList.remove("active__modal");
  document.body.classList.remove("body_lock");
  mdContainer.classList.remove("bg_active");
});
