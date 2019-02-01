$(function() {

    //Arctic Modal
    $('.call-btn').click(function (e) {
        e.preventDefault();
        $('#callModal-2').arcticmodal();
    });

    $('.review-btn').click(function (e) {
        e.preventDefault();
        $('#callModal').arcticmodal();
    });

  //Phone Mask
  	$(".phone").mask("+7 (999) 999-9999");

     //Services Slider
    $('.serv-block').slick({
      dots: true,
      dotsClass: "dots-galery",
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: '<i class="arrow-right fa fa-angle-right" aria-hidden="true"></i>',
      prevArrow: '<i class="arrow-left fa fa-angle-left" aria-hidden="true"></i>',
  });

    //Clients Slider
    $('.clients-wrap').slick({
      dots: true,
      dotsClass: "dots-galery",
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      adaptiveHeight: false,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: '<i class="cl-right arrow-right fa fa-angle-right" aria-hidden="true"></i>',
      prevArrow: '<i class="cl-left arrow-left fa fa-angle-left" aria-hidden="true"></i>',
  });

    //Reviews Slider
    $('.review').slick({
      dots: true,
      dotsClass: "dots-galery dots-rev",
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: '<i class="rev-right arrow-right fa fa-angle-right" aria-hidden="true"></i>',
      prevArrow: '<i class="rev-left arrow-left fa fa-angle-left" aria-hidden="true"></i>',
  });

    //Articles Slider
    $('.articles-wrap').slick({
      dots: true,
      dotsClass: "dots-galery dots-rev",
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: '<i class="arrow-right fa fa-angle-right" aria-hidden="true"></i>',
      prevArrow: '<i class="arrow-left fa fa-angle-left" aria-hidden="true"></i>',
  });

    //Docs Slider
    $('.norm-docs__list').slick({
      dots: true,
      dotsClass: "dots-galery dots-doc",
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: '<i class="doc-arr-right arrow-right fa fa-angle-right" aria-hidden="true"></i>',
      prevArrow: '<i class="doc-arr-left arrow-left fa fa-angle-left" aria-hidden="true"></i>',
  });

  //   //Sticky Navigation
  $("#navigator").sticky({topSpacing:0});
   
   // // Galery
    $("#gallery a").lightbox();
}) 

//Answer Block
    var menuElem1 = document.getElementById('dropdown-menu-1');
    var titleElem1 = menuElem1.querySelector('.arrow-down_1');

    titleElem1.onclick = function() {
      menuElem1.classList.toggle('open');
    };

    var menuElem2 = document.getElementById('dropdown-menu-2');
    var titleElem2 = menuElem2.querySelector('.arrow-down_2');

    titleElem2.onclick = function() {
      menuElem2.classList.toggle('open');
    };

    var menuElem3 = document.getElementById('dropdown-menu-3');
    var titleElem3 = menuElem3.querySelector('.arrow-down_3');

    titleElem3.onclick = function() {
      menuElem3.classList.toggle('open');
    };

    var menuElem4 = document.getElementById('dropdown-menu-4');
    var titleElem4 = menuElem4.querySelector('.arrow-down_4');

    titleElem4.onclick = function() {
      menuElem4.classList.toggle('open');
    };