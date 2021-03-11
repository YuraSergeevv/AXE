$(document).ready(function () {



    $('.menu__btn').on('click', function () {
        $('.menu__row').toggleClass('active')
        $('.menu__btn').toggleClass('pressed')
    })

    $('.menu__link').on('click', function () {
        $('.menu__row').removeClass('active')
        $('.menu__btn').removeClass('pressed')
    })

    $('.trapezoid').each(function () {

        $(this).on('click tochend', function () {
            $('.trapezoid').removeClass('trapezoid-active')
            $(this).toggleClass('trapezoid-active')
            let tab = "." + this.id;
            $(".tab").hide(1);
            $(tab).show(500);
        })
    });



    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    });


    $('.slider__product').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
    });


    $('.slider__news').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
    });



    $('.about__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    $('.axe-group').each(function () {
        let tog = $(this).find('.slider__product')
        $(this).find('.axe-block').on('click tochend', function () {
            tog.toggle(500);
        })
    });

    // $('.card__item-slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     vertical: true,
    //     verticalSwiping: true,
    // });



    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: 'card__item-slider'
    // });
    // $('.card__item-slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     //  centerMode: true,
    //     focusOnSelect: true,
    //     vertical: true,
    //     verticalSwiping: true,
    // });



    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        vertical: true,
        verticalSwiping: true,
    });

    $('[data-fancybox]').fancybox({
        autoFocus: false,
        afterLoad: function () {
            $('.fslider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.fslider-nav'
            });
            $('.fslider-nav').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.fslider-for',
            });

        },
        afterClose: function () {
            $('.fslider-for').slick('unslick');
            $('.fslider-nav').slick('unslick');
        }
    });


    // $('.axe-group').each(function () {
    //     let tog = $(this).find('.slider__product')
    //     $(this).find('.axe-block').on('click tochend', function () {
    //         tog.classList.toggle('slider__product-active');
    //     })
    // });




    const rangeSlider = document.getElementById('range-slider');

    if (rangeSlider) {
        noUiSlider.create(rangeSlider, {
            start: [5000, 30000],
            connect: true,
            step: 1,
            range: {
                'min': [0],
                'max': [35000]
            }
        });

        const input0 = document.getElementById('input-0');
        const input1 = document.getElementById('input-1');
        const inputs = [input0, input1];

        rangeSlider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = Math.round(values[handle]);
        });

        const setRangeSlider = (i, value) => {
            let arr = [null, null];
            arr[i] = value;

            console.log(arr);

            rangeSlider.noUiSlider.set(arr);
        };

        inputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                console.log(index);
                setRangeSlider(index, e.currentTarget.value);
            });
        });
    }

    $('.filter__bth').on('click', function () {
        $('.filter').addClass('active')
    })

    $('.filter__close').on('click', function () {
        $('.filter').removeClass('active')

    })

    $(document).mouseup(function (e) {
        var container = $(".filter__wrapper");
        if (container.has(e.target).length === 0) {
            $('.filter').removeClass('active')
        }


    });


    let select = function () {
        let selectHeader = document.querySelectorAll('.select__header');
        let selectItem = document.querySelectorAll('.select__item');

        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle)
        });

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });



        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
        }

        function selectChoose() {
            let text = this.innerHTML,
                select = this.closest('.select'),
                currentText = select.querySelector('.select__current');
            currentText.innerHTML = text;
            select.classList.remove('is-active');

        }

    };


    select();





    /*Filter */
    $('.filter__btn').on('click', function () {
        $('.filters__wrap').addClass('filter-on')
    })

    $('.filter__close').on('click', function () {
        $('.filters__wrap').removeClass('filter-on')

    })


});

'use strict'
$(document).ready(function () {

    /*ibg*/

    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                let src_img = $(this).find('img').attr('src');
                $(this).css('backgroundImage', 'url("' + src_img + '")');
            }
        });
    }

    ibg();

    /*попап*/

    function openPopup(id) {
        $(".js-popup[data-id-popup='" + id + "']").fadeIn(300);
    }

    function close_popup() {
        $('.js-popup').fadeOut(300);
    }

    $('.js-popup__close').click(close_popup);

    $('.js-btn-popup').click(function (e) {
        e.preventDefault();
        let index_btn_popup = $(this).attr('href');
        openPopup(index_btn_popup);
    });

    $('.js-popup').click(function (e) {
        let popup = $('.js-popup__wrapp');
        if (!popup.is(e.target) && popup.has(e.target).length === 0)
            close_popup();
    });

});
/*кнопка прокрутки вверх*/

const offset = 100;
const scrollUp = document.querySelector('.js-scroll-up');
const scrollUpSvgPath = document.querySelector('.js-scroll-up__path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = '\'' + pathLength + pathLength + '\'';
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

// getTop
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

//updateDashoffset

const updateDashoffset = () => {
    const heigth = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLength - (getTop() * pathLength / heigth);

    scrollUpSvgPath.style.strokeDashoffset = dashoffset;
}

// onScroll
window.addEventListener('scroll', () => {
    updateDashoffset();
    getTop() > offset ? scrollUp.classList.add('scroll-up_active') : scrollUp.classList.remove('scroll-up_active');
});

// click
scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

/*скрол по якорю*/