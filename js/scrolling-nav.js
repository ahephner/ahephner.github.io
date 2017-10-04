            $(document).ready(function(){
            //   alert("JQuery is active")


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

        ("#boxes").hover(function(){
          $(this).shake();
        })

            // $( document ).ready(function() {
            //     $(".happy")[0].hover(); 
            // });

            // $("#link1, .screenShot").mouseout(function(e) {
            //       e.preventDefault();
            //       if($(this).is("img"))
            //       {
            //           $(".screenShot").stop().fadeOut('slow', function(e) {
            //               $('#link1').stop().fadeOut('slow', function(e) {
            //                   $(".screenShot").stop().fadeIn('slow');
            //               });
            //           });
            //       }
            //       else
            //       {
            //           $('#link1').stop().fadeOut('slow', function(e) {
            //               $(".screenShot").stop().fadeIn('slow');
            //           });
            //       }
            // });

            // $( document ).ready(function() {
            //     $(".screenShot")[0].hover(); 
            // });



            });
