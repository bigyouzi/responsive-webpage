/*
 * 自己的JS脚步
 * @Author: iceStone
 * @Date:   2015-12-12 10:59:26
 * @Last Modified by:   iceStone
 * @Last Modified time: 2015-12-13 15:19:19
 */

'use strict';

$(function() {
    // 当文档加载完成才会执行
    /**
     * 根据屏幕宽度的变化决定轮播图片应该展示什么
     * @return {[type]} [description]
     */
    function resize() {

        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $('#main-ad > .carousel-inner>  .item').each(function(i, item) {
            var $item = $(item);
            var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
            $item.css('backgroundImage', 'url("' + imgSrc + '")');
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '" alt="" />');
            } else {
                $item.empty();
            }
        });
    }

    $(window).on('resize', resize).trigger('resize');

    $('[data-toggle="tooltip"]').tooltip();

    //var $ulContainer = $(".nav-tabs");
    //var width = 30;
    //$ulContainer.children().each(function(index,element){
    //    width += element.clientWidth;
    //});
    //if($(window).width < $ulContainer)
    //{
    //    $ulContainer.css('width',width);
    //}
    var $ulContainer = $('.nav-tabs');
    // 获取所有子元素的宽度和
    var width = 300; // 因为原本ul上有padding-left
    // 遍历子元素
    $ulContainer.children().each(function(index, element) {
        // console.log(element.clientWidth);
         console.log($(element).width());
        width += element.clientWidth;
    });
    console.log(width);
    if($(window).width() < width)
    {
        $ulContainer.css('width',width).parent().css('overflow-x', 'scroll');
    }


    var $newsTitle = $(".news-title");
    $("#news .nav-pills a").on('click',function(){
        var $this = $(this);
        var title = $this.data('title');
        $newsTitle.text(title);
    });

    var $carousels = $(".carousel");
    var startX,endX;
    var offset = 50;
    $carousels.on('touchstart',function(e){
        startX = e.originalEvent.touches[0].clientX;
        console.log(startX);
    });
    $carousels.on('touchmove', function(e) {
        // 变量重复赋值
        endX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchend',function(e){
        console.log(endX);

        var distance = Math.abs(endX - startX);
        if(distance > offset)
        {
            //console.log(startX>endX ? "<<":">>");
            $carousels.carousel(startX>endX ? "next":"prev")
        }
    });
});
