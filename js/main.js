const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('.search input'); // 중복되는것이 있음
const searchInputEl = searchEl.querySelector('.search input');

searchEl.addEventListener('click', function() {
    // logic..
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() { // 핸들러
    searchEl.classList.add('focused'); // 특정 요소에 클래스정보를 가진 객체에서 어떤 클래스내용을 추가하겠다.
    searchInputEl.setAttribute('placeholder', '통합검색'); // Attribute:HTML속성, 어떤 HTML속성을 지정하겠다.
});


searchInputEl.addEventListener('blur', function() { // blur : 포커스가 해제됐을때
    searchEl.classList.remove('focused'); //
    searchInputEl.setAttribute('placeholder', ''); // Attribute:HTML속성, 어떤 HTML속성을 지정하겠다.
});