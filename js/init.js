//init bpopup
$('.open-order-modal').on('click', function () {
    $('.modal-order').bPopup({
        closeClass: '_close-popup',
    });
});


// init Formstyler
setTimeout(function() {
  $('select').styler();
}, 100);

//init slick
$('.about-us-slick').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});