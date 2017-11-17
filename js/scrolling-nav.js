            $(document).ready(function(){
            //   alert("JQuery is active")
            //this close modal after clicking link to visit site
            //make sure to use target="_blank" to open in new tab and keep your portfolio on their browser
            $(".bye").on("click", function(){
               $(".gone").modal("hide");
                console.log("i was clicked");
          });

            $(".happy").hover(function(e) {
                  e.preventDefault();
                  $(this).stop().fadeOut('slow', function(e) {
                      $('#link').stop().fadeIn('slow');
                  });
            });

            $("#link, .happy").mouseout(function(e) {
                  e.preventDefault();
                  if($(this).is("img"))
                  {
                      $(".happy").stop().fadeOut('slow', function(e) {
                          $('#link').stop().fadeOut('slow', function(e) {
                              $(".happy").stop().fadeIn('slow');
                          });
                      });
                  }
                  else
                  {
                      $('#link').stop().fadeOut('slow', function(e) {
                          $(".happy").stop().fadeIn('slow');
                      });
                  }
            });

       

   
 });































