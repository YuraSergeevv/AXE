//@prepros-append script.js
//@prepros-append scroll.js
$(document).ready(function () {



    $('.menu__btn').on('click tochend', function () {
        $('.menu__row').toggleClass('active')
        $('.menu__btn').toggleClass('pressed')
    })

    $('.menu__link').on('click tochend', function () {
        $('.menu__row').removeClass('active')
        $('.menu__btn').removeClass('pressed')
    })



    $('.axe-group').each(function () {
        let tog = $(this).find('.slider__product');
        $(this).find('.axe-block').on('click tochend', function () {
            $(this).find('.axe-arrow').toggleClass('axe-arrow-on ');
            tog.toggleClass('slider__product-on');
            $('.slider__product-on').slick('resize');
            return false
        })
    });


    $('.menu__item').each(function () {
        let tog = $(this).find('.drop__list');
        tog.hide(1);
        $(this).find('.ml_arrow').on('click tochend', function () {
            tog.slideToggle(500);
        })
    });

    // $('.axe-group').each(function () {
    //     let tog = $(this).find('.slider__product');
    //     $(this).find('.axe-block').on('click tochend', function () {
    //         tog.toggle(500);
    //     })
    // });
    $('.trapezoid').each(function () {

        $(this).on('click tochend', function () {
            if (!$(this).hasClass("trapezoid-active")) {
                $('.trapezoid').removeClass('trapezoid-active');
                $(this).toggleClass('trapezoid-active');
                let tab = "." + this.id;
                $(".tab").slideUp(1);
                $(tab).slideDown(500);
                return false;
            }
            else return false;
        })
    });

    $('.contact__city').each(function () {
        $(this).on('click tochend', function () {
            if (!$(this).hasClass("city-active")) {
                $('.contact__city').removeClass('city-active');
                $(this).toggleClass('city-active');
                let tab = "." + this.id;
                $(".city").slideUp(1);
                $(tab).slideDown(500);
                return falses;
            }
            else return false;
        })

    });




    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,

                }
            },
        ]
    });





    $('.slider__product').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 401,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
        ]
    });


    $('.slider__news').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
        ]
    });



    $('.about__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 401,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
        ]

    });







    $(document).ready(function () {
        footerToggle();
    });

    $(window).resize(function () {
        footerToggle();
    });

    function footerToggle() {
        if ($(window).innerWidth() < 500) {
            $('.footer__column').each(function () {
                let tog = $(this).find('.footer__info');
                $(this).find('.footer__title').on('click tochend', function () {
                    tog.toggle(500);
                    return false;
                })
            });
        } else {
            $('.footer__column').each(function () {
                let tog = $(this).find('.footer__info');
                $(this).find('.footer__title').off();
            });
        }
    }






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
        responsive: [
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 1,
                    vertical: false,
                    verticalSwiping: false,
                }
            },
        ]
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
                responsive: [
                    {
                        breakpoint: 551,
                        settings: {
                            slidesToShow: 1,
                            vertical: false,
                            verticalSwiping: false,
                        }
                    },
                ]
            });

        },
        afterClose: function () {
            $('.fslider-for').slick('unslick');
            $('.fslider-nav').slick('unslick');
        }
    });


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

    let orderSelect = function () {
        let selectHeader = document.querySelectorAll('.select__header-order');
        let selectItem = document.querySelectorAll('.select__item-order');

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
                select = this.closest('.select-order'),
                currentText = select.querySelector('.select__current-order');
            currentText.innerHTML = text;
            select.classList.remove('is-active');

        }

    };


    orderSelect();

    let citySelect = function () {
        let selectHeader = document.querySelectorAll('.select__header-city ');
        let selectItem = document.querySelectorAll('.select__item-city');

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
                select = this.closest('.select-city'),
                currentText = select.querySelector('.select__current-city');
            currentText.innerHTML = text;
            select.classList.remove('is-active');

        }

    };


    citySelect();


    let select_tr = function () {
        let selectHeader = document.querySelectorAll('.select__header-tr');
        let selectItem = document.querySelectorAll('.select__item-tr');

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
                select = this.closest('.select-tr'),
                currentText = select.querySelector('.select__current-tr');
            currentText.innerHTML = text;
            select.classList.remove('is-active');

        }

    };


    select_tr();


    /*Filter */
    $('.filter__btn').on('click', function () {
        $('.filters__wrap').addClass('filter-on')
    })

    $('.filter__close').on('click', function () {
        $('.filters__wrap').removeClass('filter-on')

    })


    ///Basket///

    $(".basket__count-inner").each(function () {
        let $quantityArrowMinus = $(this).find(".minus");
        let $quantityArrowPlus = $(this).find(".plus");
        let $quantityNum = $(this).find('.basket__count')

        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);

        function quantityMinus() {
            if ($quantityNum.val() > 1) {
                $quantityNum.val(+$quantityNum.val() - 1);
            }
        }

        function quantityPlus() {
            if ($quantityNum.val() < 30000) {
                $quantityNum.val(+$quantityNum.val() + 1);
            }
        }
    });

    if ($(window).width() <= 1024) { // проверяешь расширении
        //.div - это куда нужно переместить
        // .titleProduct - что нужно переместить 
        $('.card__item-column-l').prepend($('.card__item__title-block'));
    }

    if ($(window).width() <= 1024) { // проверяешь расширении
        //.div - это куда нужно переместить
        // .titleProduct - что нужно переместить 
        $('.card__item-column-r').prepend($('.card__item__block-icon-wrapp'));
    }
    if ($(window).width() <= 1024) { // проверяешь расширении
        //.div - это куда нужно переместить
        // .titleProduct - что нужно переместить 
        $('.card__item-column-l').append($('.card__item-price_btn'));
    }
});

