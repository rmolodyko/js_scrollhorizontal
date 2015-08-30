/**
 * SamsonJS plugin for scrolling horizontal block
 *
 * @param selectorWrapBlock block which react on mouse scroll
 * @param selectorRotateBlock block which have to scroll
 * @param shift it's value which affect to velocity scrolling
 *        if value < 0 then scroll will be from left to right
 *        if value > 0 then it is reverse direction
 */
var ScrollHorizontal = function(selectorWrapBlock, selectorRotateBlock, shift) {
    var shift = shift || -1;

    //Set handler on mouse scroll
    selectorWrapBlock.mousewheel(function(p1,p2,event){

        //Current value of rotation
        var scrollSize = parseInt(selectorRotateBlock.scrollLeft());

        //Solved value of rotation
        var newPosition = parseInt(shift * event.wheelDelta);

        //Set new scroll value
        selectorRotateBlock.scrollLeft(scrollSize+newPosition);
    },true,true);
    
    
    var touchStart = 0;
    // Remember strarting position
    selectorWrapBlock.DOMElement.addEventListener('touchstart', function(event) {
        touchStart = event.touches[0].pageX;
    });

    // Change position of block
    selectorWrapBlock.DOMElement.addEventListener('touchmove', function(event) {

        // Get current shift on the event
        var currentPosition = event.touches[0].pageX;

        //Current value of rotation
        var scrollSize = parseInt(selectorRotateBlock.scrollLeft());

        //Solved value of rotation
        var newPosition = parseInt(currentPosition - touchStart);

        //Set new scroll value
        selectorRotateBlock.scrollLeft(scrollSize-newPosition);
    });
};
