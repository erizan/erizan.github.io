var main = function() {
  "use strict"
  
    $("button").on("click", function () {
           if ($(".foto1").hasClass("selected")) {
                    $(".foto2").addClass("selected");
                    $(".foto1").removeClass("selected");
           }

           else if ($(".foto2").hasClass("selected")) {
                    $(".foto3").addClass("selected");
                    $(".foto2").removeClass("selected");
          }
          else  {
                    $(".foto1").addClass("selected");
                    $(".foto3").removeClass("selected");
          };
  });
};
$(document).ready(main);