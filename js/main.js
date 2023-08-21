const searchEl = document.querySelector(".search");
// const searchInputEl = document.querySelector('.search input'); // 중복되는것이 있음
const searchInputEl = searchEl.querySelector(".search input");

searchEl.addEventListener("click", function () {
  // logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  // 핸들러
  searchEl.classList.add("focused"); // 특정 요소에 클래스정보를 가진 객체에서 어떤 클래스내용을 추가하겠다.
  searchInputEl.setAttribute("placeholder", "통합검색"); // Attribute:HTML속성, 어떤 HTML속성을 지정하겠다.
});

searchInputEl.addEventListener("blur", function () {
  // blur : 포커스가 해제됐을때
  searchEl.classList.remove("focused"); //
  searchInputEl.setAttribute("placeholder", ""); // Attribute:HTML속성, 어떤 HTML속성을 지정하겠다.
});

const badgeEl = document.querySelector("header .badges");

// lodash cdn
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log("asd");
    if (window.scrollY > 500) {
      // 배지 숨기기
      // badgeEl.style.display = 'none';
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      // 배지 보이기
      // badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);
// _.throttle(함수, ms시간)

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1,
  });
});

new Swiper(".notice-line .swiper-container", {
  // 방향: 수직
  direction: "vertical",
  // 자동재생여부
  autoplay: true,
  // 반복 여부
  loop: true,
});
