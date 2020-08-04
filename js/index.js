var header = document.querySelector(".header");
var contactTop = document.querySelector(".ct-scrl-top .contact");
var scroll = document.querySelector('.ct-scrl-top .scroll');
var burgerHead = document.querySelector('.burger-head');
var headMenu = document.querySelector('.head-menu');
window.onscroll = function () {
    let pageY = window.pageYOffset;
    if (pageY > 600) {
        contactTop.classList.add('stick');
        contactTop.style.height = "75px";
        header.style.height = "75px";
    }
    else {
        contactTop.classList.remove('stick');
        contactTop.style.height = "";
        header.style.height = "";
    }
}
burgerHead.onclick = function () {
    burgerHead.classList.toggle('expand');
    if (burgerHead.classList.contains('expand')) {
        headMenu.classList.add('expand')
    }
    else {
        headMenu.classList.remove('expand')
    }
}
$("#scroll").click(function () {
    $('html, body').animate({
        scrollTop: $("#aim").offset().top
    }, 1500);
});
var scroll = document.querySelector('#scroll');
var aim = document.querySelector('#aim');
scroll.onclick = function(){
    var aimTo = aim.scrollTop;
    console.log(aimTo)
}