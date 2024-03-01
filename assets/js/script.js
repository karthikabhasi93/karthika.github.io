$(document).ready(function() {
    // Resize the first image and rectangle
    var img = $('#myImage');
    var rect = $('#myRectangle');
    rect.css({
        width: img.width() + 'px',
        height: img.height() + 'px'
    });

    // Resize the second image and rectangle
    var img1 = $('#myImage1');
    var rect1 = $('#myRectangle1');
    rect1.css({
        width: img1.width() + 'px',
        height: img1.height() + 'px'
    });

    // Resize the third image and rectangle
    var img2 = $('#myImage2');
    var rect2 = $('#myRectangle2');
    rect2.css({
        width: img2.width() + 'px',
        height: img2.height() + 'px'
    });
});