$(function () {

  'use strict';

  var windowHeight = $(window).height();

  function handleIntro(scroll) {

    var intro = $('.intro');

    var top = intro.offset().top;
    var bottom = top + intro.outerHeight();

    if (bottom < scroll + 200 && bottom >= scroll + 100) {
      intro.css({
        boxShadow: '0px 0px ' + (bottom - (scroll + 100)) + 'px #015561'
      });
    } else {
      intro.removeAttr('style');
    }
    if (bottom < scroll + 100) {
      intro.removeClass('active');
    } else {
      intro.addClass('active');
    }

  }

  function handleAbout(scroll) {

    var intro = $('.about');
    var frame = $('.frame', intro);

    var top = intro.offset().top;
    var bottom = top + intro.outerHeight();

    if (top > scroll + windowHeight) {
      frame.addClass('further');
      frame.removeClass('active next');
    } else if (top <= scroll + windowHeight && top > scroll + 100) {
      frame.addClass('next');
      frame.removeClass('further active');
    } else if (top <= scroll + 99) {
      frame.addClass('active');
      frame.removeClass('next further');
    } else {

    }

  }

  $(document).scroll(function () {

    var scroll = $(window).scrollTop();

    handleIntro(scroll);
    handleAbout(scroll);

  })

});