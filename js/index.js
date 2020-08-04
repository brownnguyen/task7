var header = document.querySelector(".header");
var contactTop = document.querySelector(".ct-scrl-top .contact");
var scroll = document.querySelector('.ct-scrl-top .scroll');
window.onscroll = function () {
    let pageY = window.pageYOffset;
    if (pageY > 300) {
        contactTop.classList.add('stick');
        contactTop.style.height = "75px";
        header.style.height = "75px";
    }
    else {
        contactTop.classList.remove('stick');
        contactTop.style.height = "190px";
        header.style.height = "110px";
    }
}
$("#scroll").click(function () {
    $('html, body').animate({
        scrollTop: $("#aim").offset().top
    }, 1500);
});