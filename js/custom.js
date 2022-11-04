  

  
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".navbar").addClass("stickyadd");
    } else {
        $(".navbar").removeClass("stickyadd");
    }
});







  AOS.init({
  duration: 2000,
})





