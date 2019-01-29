var calculate_size = function() {
    // var BASE_FONT_SIZE = 100;
    if (!document.querySelector(".baseline")) return;
    
    var docEl = document.documentElement,
        clientWidth = document.querySelector(".baseline").clientWidth;
    if (!clientWidth) return;
//    docEl.style.fontSize = (clientWidth / 24) + 'px';

    if (clientWidth / 24 < 16)
        docEl.style.fontSize = (clientWidth / 24) + 'px';
    else
        docEl.style.fontSize = '16px';
    document.getElementById("logo").style.left = -3893 - 375 + clientWidth + "px";
};

// Abort if browser does not support addEventListener
if (document.addEventListener) {
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    window.addEventListener(resizeEvt, calculate_size, false);
    document.addEventListener('DOMContentLoaded', calculate_size, false);
    calculate_size();
} 