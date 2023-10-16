

$(document).ready(function (e) {
    let counter =1
    let totalSlides = $(".first-slider .first-slider-slide").length
    $(".total-of-slides").text(totalSlides)
    $(".current-slide").text(counter)

    $(".first-slider.first-slider-slide.active")

    $('.first-slider .first-slider-slide').each(function(index) {
        $(this).attr('data-slide-index', index);
    });


    $(".right").on("click" , function () {

        let currentSlide = $(".first-slider-slide.active")
        let next = currentSlide.next(".first-slider-slide")
        if (next.length && next.css("opacity" , '0') ){
            currentSlide.animate({"opacity":"0"} , 1500 , function () {
                currentSlide.css("display" , "none").removeClass('active')
               next.css("display" , "flex")
                next.animate({"opacity":"1"},1500 , function (){
                    next.addClass('active')
                    counter +=1
                    console.log(counter)
                    if (counter==4 || counter<4){
                        $(".current-slide").text(counter)
                    } else {
                        $(".current-slide").text(counter=1)
                    }
                })
            })
        } else {
                currentSlide.animate({"opacity":"0"},1500,function () {
                    $(this).removeClass("active")
                    currentSlide.css("display" , "none")
                   $(".first-slider-slide ").first().css("display" , "flex").animate({"opacity":"1"} , 1500 , function () {
                       $(this).addClass("active")
                   })

                })
        }


    })

    $(".left").on("click" , function () {
        let currentSlide = $(".first-slider-slide.active")
        let prevSlide = currentSlide.prev().length === 0 ? $(".first-slider").children().eq(2) : currentSlide.prev()
        currentSlide.animate({"opacity":"0"},1500 , function () {
            currentSlide.css("display","none")
            currentSlide.removeClass('active')
            prevSlide.css("display","flex")
            prevSlide.animate({"opacity" : "1"} , 1500 , function () {
                prevSlide.addClass('active')
                $(".current-slide").text($(".first-slider .active").attr("datafld"))

            })

        })


    })

    $(".navigator").click(function (e) {
        let current = $(".second-slider .active")
        let next = current.next()
        if (next.length && next.css("opacity" , '0')){
            current.animate({"opacity":"0"},1500 , function () {
                current.css("display","none")
                current.removeClass('active')
                next.css("display","flex")
                next.animate({"opacity" : "1"} , 1500 , function () {
                next.addClass('active')
                })

            })
        } else {
            $('.second-slider .active').animate({"opacity":"0"},1500, function () {
                $(".second-slider .active").css("display" , "none").removeClass("active")
                $(".second-slide").first().css("display" , "flex").animate({"opacity":"1"},1500).addClass("active")

            })


        }

    })

    $(".responsive-slider-navigator").on("click",function () {
        let current = $(".responsive-slider-card.active")
        let next = current.next(".responsive-slider-card")
        console.log(next.length , next)

        if (next.length &&  next.css("opacity" , '0')){
            current.animate({"opacity":"0"},1500 , function () {
                current.css("display","none")
                current.removeClass('active')
                next.css("display","flex")
                next.animate({"opacity" : "1"} , 1500 , function () {
                    next.addClass('active')
                })

            })
        } else {
                current.animate({"opacity":"0"},1500, function () {
                   current.css("display" , "none")
                    current.removeClass("active")
                    $(".responsive-slider-card").first().css("display" , "flex").animate({"opacity":"1"},1500,function () {
                        $(this).addClass("active")
                    })

                })


        }


    })

})