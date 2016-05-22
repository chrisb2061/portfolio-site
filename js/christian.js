

$(document).ready(function() {

    var hamburger = $('#hamburger');
    var overlayNav = $('#overlay-nav');
    var closeBtn= $('.closebtn');
    var overlayLinks = $('.overlay-link');
    var theBio= $('#the-bio');
    var theResume = $('#the-resume');
    var bioButton = $('#bio-button');
    var resumeButton = $('#resume-button');
    var closeResume = $('.close-resume');

    function closeTheResume () {
        theResume.velocity({
            right:-4000
        }, 500);
    }

    $('#fullpage').fullpage({
        anchors: ['index', 'about-me', 'resume', 'portfolio', 'contact-me'],
        menu: '#menu',
        scrollingSpeed: 1000,
        autoScrolling:false,
        onLeave: function(index, nextIndex, direction){

            if(index == 1 && nextIndex == 2 && direction =='down'){
                hamburger.show();
            } else if(index == 2 && nextIndex == 1 && direction =='up'){
                hamburger.hide();
            }

        }

    });



    resumeButton.click(function(){
        event.preventDefault();
        console.log(bioButton);
        theResume.velocity({
            right:0
        }, 500);

    });


    hamburger.click(function(){
        overlayNav.show();
        closeTheResume();

        hamburger.hide();
        overlayNav.velocity({
            height: '100%'

        }, 500, function() {
            overlayLinks.show();
        })

    });

    closeBtn.click(function() {
        overlayLinks.hide();
        overlayNav.velocity({
            height: '0%'

        }, 500, function() {
            hamburger.show();
            overlayNav.hide();
        })
    });


    overlayLinks.click(function() {
        overlayLinks.hide();
        overlayNav.velocity({
            height: '0%'

        }, 500, function() {
            hamburger.show();
            overlayNav.hide();
        })
    });

});


