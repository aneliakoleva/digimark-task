$(document).ready(function(){

    $('#contact-form').parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
    $('.bs-callout-info').toggleClass('hidden', !ok);
    $('.bs-callout-warning').toggleClass('hidden', ok);
  })
  .on('form:submit', function() {
    return false; // Don't submit form for this demo
    })
  .on('form:success', function() {
    //   $('.success-message').
    $('.sucess-message').addClass('active');
    $('#contact-form').addClass('active');

      return false;
  });


    $('.selectpicker').selectpicker({
    });

    $('.hamburger').on('click', function(){
        $(this).toggleClass('is-active');
    });


});
