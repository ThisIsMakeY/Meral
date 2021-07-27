$(document).ready(function(){
    $('.slider').slick({
        slidesToShow:4,
        infinite:false,
        slidesToScroll:1,
        initialSlide:1,
        // variableWidth:true,
        adaptiveHeight:true,
        responsive: [
            {
                breakpoint:1720,
                settings: {
                    slidesToShow:4,
                    initialSlide:0,
                }
            },{
                breakpoint:1361,
                settings: {
                    slidesToShow:3,
                    initialSlide:1,
                }
            },{
                breakpoint:1170,
                settings: {
                    slidesToShow:3,
                    initialSlide:1,
                }
            },{
                breakpoint:992,
                settings: {
                    slidesToShow:2,
                    initialSlide:1,
                    appendArrows:$('.arrows')
                }
            },{
                breakpoint:577,
                settings: {
                    slidesToShow:1,
                    initialSlide:1,
                    appendArrows:$('.arrows')
                }
            }
        ]
    });
});