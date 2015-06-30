/**
 * Вывести контейнер на черном фоне в центре экрана
 */
var ScrollHorizontal = function( selectorWrapBlock, selectorRotateBlock, shift)
{
    var shift = shift || 10;
    var margin = 0;
    selectorWrapBlock.mousewheel(function(){
        var currentMargin = parseInt(selectorRotateBlock.css('margin-left'));
        console.log(currentMargin);
        var newMargin = shift + currentMargin;
        selectorRotateBlock.css('margin-left',newMargin+'px');
    });
};
