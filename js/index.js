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
        headMenu.classList.remove('expand');
    }
}
// var linkOne = document.querySelector('#link-one');
// scroll.addEventListener('click', function () {
//     var rect = linkOne.getBoundingClientRect().y;
//     window.scrollBy(0, rect - 75);
//     console.log(rect)
// }
// )
$("#scroll").click(function () {
    $('html, body').animate({
        scrollTop: $("#link-one").offset().top - 75
    }, 1500);
});

$("#scrll-contact").on('click', function () {
    $('html,body').animate({
        scrollTop: $('#link-five').offset().top
    }, 1500)
})
$(".head-ul li").on('click', function () {
    var data_id = $(this).data('scroll');
    burgerHead.classList.remove('expand');
    headMenu.classList.remove('expand');
    $('html, body').animate({
        scrollTop: $('#' + data_id).offset().top - 75
    }, 1500);
});
$('#backTop').click(function (event) {
    $('html,body').animate({
        scrollTop: 0
    }, 1000, 'swing');
    return false;
});