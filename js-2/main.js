



$(document).ready(function(){



  $('.flexslider').flexslider({
    animation: "slide"
  });
        $('#horizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion           
            width: 'auto', //auto or any width like 600px
            fit: true,   // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#tabInfo');
                var $name = $('span', $info);

                $name.text($tab.text());

                $info.show();
            }
        });

        $('#verticalTab').easyResponsiveTabs({
            type: 'vertical',
            width: 'auto',
            fit: true
        });

$('div.demo-show> div').hide(); 
    $('div.demo-show> h5').click(function() {
        $(this).next('div').slideToggle('normal')
        .siblings('div:visible').slideUp('normal');
    $(this).toggleClass('opened');
    return false;
    });


     $("#sts_play_btn_1").click(function(){
            $(".youtube_video").slideToggle();
            return false;
                         }); 

     $("#sts_play_btn_2").click(function(){
            $(".youtube_video2").slideToggle();
            return false;
                         }); 


     $("#sts_play_btn_3, .youtube_video3").click(function(){
        console.log('hit');
            $(".youtube_video3").slideToggle();
            return false;
                         }); 

});

