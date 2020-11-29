$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger').toggleClass('rotate');
        $('body').toggleClass('wrapper');
        $('.header-navbar').toggleClass('active');
    })
})
jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});