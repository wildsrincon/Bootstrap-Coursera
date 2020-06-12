$(document).ready(function () {
        $("#myCarousel").carousel({ interval: 2000 });
          $("#carouselButton").click(function(){
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#myCarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                $("#myCarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');                    
            }
          });

        // Reserve Modal
        $("#reserveButton").click(function() {
          $("#reserveModal").modal('show');
        });
        $("#reserveHide").click(function() {
          $("#reserveModal").modal('hide');
        });

        // Login Modal
        $('a[href$="#loginModal"]').on( "click", function() {
        $('#loginModal').modal('show');
        });
        
        $("#loginHide").click(function() {
          $("#loginModal").modal('hide');
        });

      });