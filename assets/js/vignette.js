/*jslint browser:true, unparam:true*/
/*global $, FastClick*/

$(function () {

    'use strict';

    // Execute FastClick.js
    FastClick.attach(document.body);

    // Blur background on scroll
    $(window).scroll(function (e) {
        var s = $(window).scrollTop(),
            opacityVal = (s / 150.0);
        $('.article-blur').css('opacity', opacityVal);
    });

    // Social sharing links
    $('#twitter').click(function () {
        window.open(this.href, 'twitter-share', 'width=550,height=235');
        return false;
    });

    $('#facebook').click(function () {
        window.open(this.href, 'facebook-share', 'width=580,height=296');
        return false;
    });

    $('#google-plus').click(function () {
        window.open(this.href, 'google-plus-share', 'width=490,height=530');
        return false;
    });

});
