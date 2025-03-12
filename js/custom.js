$(function () {

    const tl = gsap.timeline();

    tl
        .from('.main_visual h2', { x: 640, opacity: 0, delay: 1 })
        .from('.main_visual p', { x: 640, opacity: 0 })

    // 큐브슬라이드
    // const hs = new Swiper('.header .cube .header_slide', {
    //     loop: true,
    //     effect: "cube",
    //     grabCursor: true,
    //     cubeEffect: {
    //         shadow: true,
    //         slideShadows: true,
    //         shadowOffset: 20,
    //         shadowScale: 0.94,
    //     },
    // })

    $('.wrapper').fullpage({
        anchors: ['intro', 'portfolio01', 'portfolio02', 'portfolio03', 'portfolio04', 'training', 'profile',],
        fixedElements: '.header, .footer',
        onLeave: function (o, d, dr) {
            let idx = d.index;
            if (idx == 0) {
                tl.restart();
            }

            // 슬라이드 돌아가게
            //hs.slideToLoop(idx);


            $('.header .side_nav li').removeClass('on');
            $('.header .side_nav li').eq(idx).addClass('on');

        },

        afterLoad: function (o, d, dr) {
            let idx = d.index;

            $('section').removeClass('on');
            $('section').eq(idx).addClass('on');
        }
    });

});




$(function () {
    $('.header .btn').on('click', function () {
        $(this).toggleClass('on');
        $('.header .cover_lnk').toggleClass('on');
    });


    $('.header .cover_lnk a').on('click', function () {
        $('.header .btn').removeClass('on');
        $('.header .cover_lnk').removeClass('on');
    });

    $('.header .cover_lnk').on('wheel', function (e) {
        e.preventDefault();
        return false;
    })
})

$(function () {
    AOS.init();
})