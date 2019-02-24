$(document).ready(function() {
    
    /* Using waypoint plugin to support sticky navigation */
    $('.js--section-overview').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    })

});