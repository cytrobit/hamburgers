const span1 = document.querySelector(".spn1");
const span2 = document.querySelector(".spn2");
const span3 = document.querySelector(".spn3");
const wrapper = document.querySelector(".wrapper");

const span4 = document.querySelector(".spn4");
const span5 = document.querySelector(".spn5");
const span6 = document.querySelector(".spn6");
const wrapper1 = document.querySelector(".wrapper1");

const span7 = document.querySelector(".spn7");
const span8 = document.querySelector(".spn8");
const span9 = document.querySelector(".spn9");
const wrapper2 = document.querySelector(".wrapper2");

const span10 = document.querySelector(".spn10");
const span11 = document.querySelector(".spn11");
const span12 = document.querySelector(".spn12");
const span13 = document.querySelector(".spn13");
const wrapper3 = document.querySelector(".wrapper3");

function transmutation() {
  span1.classList.toggle("spn1-trnsfrm");
  span2.classList.toggle("spn2-trnsfrm");
  span3.classList.toggle("spn3-trnsfrm");
}

function transmutation2() {
  wrapper1.classList.toggle("wrap-anim");
  span4.classList.toggle("spn4-trnsfrm");
  span5.classList.toggle("spn5-trnsfrm");
  span6.classList.toggle("spn6-trnsfrm");
}

function transmutation3() {
  wrapper2.classList.toggle("wrapper2-transform");
  span7.classList.toggle("spn7-trnsfrm");
  span8.classList.toggle("spn8-trnsfrm");
  span9.classList.toggle("spn9-trnsfrm");
}

function transmutation4() {
  wrapper3.classList.toggle("wrapper3-transfrm");
  span10.classList.toggle("spn10-trnsfrm");
  span11.classList.toggle("spn11-trnsfrm");
  span12.classList.toggle("spn12-trnsfrm");
}

wrapper.addEventListener("click", transmutation);
wrapper1.addEventListener("click", transmutation2);
wrapper2.addEventListener("click", transmutation3);
wrapper3.addEventListener("click", transmutation4);
