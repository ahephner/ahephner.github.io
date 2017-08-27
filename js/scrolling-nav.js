$(document).ready(function(){
  alert("JQuery is active")


});


$('.boston').hover(
    function(){
         $(this).addClass("lowerOpacity");
}, function(){
     $(this).removeClass("lowerOpacity");
});

