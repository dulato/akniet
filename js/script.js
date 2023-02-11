window.onscroll = function showHead() {
    let header = document.querySelector('.header');
    if (window.pageYOffset > 200) {
        header.classList.add('header_fixed');
    }
    else {
        header.classList.remove('header_fixed');
    }
}

jQuery(function() {
    $('.menu_link, .main_btn').on('click', function(event){
        var checkBox = document.querySelector('#menu-toggle');
        checkBox.checked = false;
    });
});

jQuery(function() {
    $('.menu_link_for_login').on('click', function(event){
        $('.single_page').toggleClass('actives')
    });
    $('.single_page_link').on('click', function(event){
        $('.single_page').removeClass('actives')
    });
});


jQuery(function() {
    var element = document.getElementById('number');
    var maskOptions = {
      mask: '+{7} (000) 000-00-00'
    };
    var mask = IMask(element, maskOptions);
    $('.form').on('submit',function(event) {
        event.preventDefault()
    
        if($("#number").val().length < 18){
          $(".notice_text").css('display','block')
          console.log('Error');
          return;
        }
        else{
            $(".notice_text").css('display','none')
            this.submit();
        }
    });
});

jQuery(function() {
    var elementi = document.getElementById('order_call_input');
    var maskOptionsi = {
      mask: '+{7} (000) 000-00-00'
    };
    var mask = IMask(elementi, maskOptionsi);
    $('.order_phone').on('submit', function(event) {
        event.preventDefault()
    
        if($("#order_call_input").val().length < 18){
          $(".notice_text_order").css('display','block')
          console.log('Error');
          return;
        }
        else{
            $(".notice_text_order").css('display','none')
            this.submit();
        }
    });
});

jQuery(function() {
    $('.popup-open').on('click', function (event) {
        $('.popup-fade').addClass('_open');
        $('body').addClass('lock');
        return false;
    });
    $('.popup-close').on('click', function (event) {
        $('.popup-fade').removeClass('_open');
        $('body').removeClass('lock');
        return false;
    });
    $('.popup-fade').on('click', function (event) {
        if ($(event.target).closest('.popup').length == 0) {
            $('.popup-fade').removeClass('_open');
            $('body').removeClass('lock');
        }
    });
});

jQuery(function() {
    $('.course_btn_2').on('click', function (event) {
        $('.course_btn_2_arrow').toggleClass('active');
        $('.main_course_form').toggleClass('fade');
    });
});

jQuery(function() {
    $('.main_2_course_block_btn').on('click', function (event) {
        $('.main_2_course_block_span').toggleClass('active');
        $('.hidden_headline').toggleClass('show_block');
        $('.hidden_line').toggleClass('show_block');
    });
});

jQuery(function() {
    $('.register_open').on('click', function (event) {
        $('.popup-fade').removeClass('_open');
        $('.autorize_popup').removeClass('active');
        $('.authorization_popup').removeClass('active');
        $('.register_popup').addClass('active');
        $('body').addClass('lock');
    });
    $('.reg_pop_close').on('click', function (event) {
        $('.register_popup').removeClass('active');
        $('body').removeClass('lock');
        return false;
    });
    $('.register_popup').on('click', function (event) {
        if ($(event.target).closest('.reg_pop_content').length == 0) {
            $('.register_popup').removeClass('active');
            $('body').removeClass('lock');
        }
    });
});

jQuery(function() {
    $('.reg_suc_form').on('submit', function (event) {
        $('.register_success').removeClass('active');
        $('.register_end').addClass('active');
        $('body').addClass('lock');
    })
    $('#reg_end_close').on('click', function (event) {
        $('.register_end').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.register_end').on('click', function (event) {
        if ($(event.target).closest('.reg_end_content').length == 0) {
            $('.register_end').removeClass('active');
            $('body').removeClass('lock');
        }
    });
});


jQuery(function() {
    $('.forget_pass').on('click', function (event) {
        $('.popup-fade').removeClass('_open');
        $('.register_success').removeClass('active');
        $('.register_success_2').removeClass('active');
        $('.autorize_popup').addClass('active');
        $('body').addClass('lock');
    });
    $('.reg_pop_close').on('click', function (event) {
        $('.autorize_popup').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.autorize_popup').on('click', function (event) {
        if ($(event.target).closest('.auto_popup').length == 0) {
            $('.autorize_popup').removeClass('active');
            $('body').removeClass('lock');
        }
    });
});

jQuery(function() {
    $('.ask_me_question').on('click', function(event){
        $('.popup_situation').addClass('active');
        $('body').addClass('lock');
    });
    $('.popup_ask_close').on('click', function() {
        $('.popup_situation').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.popup_situation').on('click', function(e) {
        if ($(e.target).closest('.popup_ask_content').length == 0) {
            $('.popup_situation').removeClass('active');
            $('body').removeClass('lock');
        }
    });
});

jQuery(function() {
    $('.popup_ask_form').on('submit', function(event) {
        event.preventDefault();
        $('.popup_situation').removeClass('active');
        $('.popup_situation_res_fs').addClass('active');
        $('.popup_ask_res_ok').on('click', function() {
            $('.popup_situation_res_fs').removeClass('active');
            $('body').removeClass('lock');
        });
        $('.popup_situation_res_fs').on('click', function(event) {
            if ($(event.target).closest('.popup_ask_content_res').length == 0) {
                $('.popup_situation_res_fs').removeClass('active');
                $('body').removeClass('lock');
            }
        });
    });
});

jQuery(function() {
    $('.question_for_call').on('click', function(event){
        $('.popup_question').addClass('active');
        $('body').addClass('lock');
    });
    $('.popup_ask_close').on('click', function() {
        $('.popup_question').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.popup_question').on('click', function(e) {
        if ($(e.target).closest('.popup_question_content').length == 0) {
            $('.popup_question').removeClass('active');
            $('body').removeClass('lock');
        }
    });
});

jQuery(function() {
    $('.edit_profile_teacher').on('click', function(event){
        $('.my_profile_popup').addClass('active');
        $('body').addClass('lock');
    });
    $('.my_profile_popup_close').on('click', function() {
        $('.my_profile_popup').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.my_profile_popup').on('click', function(e) {
        if ($(e.target).closest('.my_profile_popup_content').length == 0) {
            $('.my_profile_popup').removeClass('active');
            $('body').removeClass('lock');
        }
    });
});

jQuery(function() {
    $('.edit_profile_stud').on('click', function(event){
        $('.edit_student_profile').addClass('active');
        $('body').addClass('lock');
    });
    $('.reg_pop_close').on('click', function() {
        $('.edit_student_profile').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.edit_student_profile').on('click', function(e) {
        if ($(e.target).closest('.edit_student_profile_content').length == 0) {
            $('.edit_student_profile').removeClass('active');
            $('body').removeClass('lock');
        }
    });
});

jQuery(function() {
    var element = document.getElementById('popup_question_tel');
    var maskOptions = {
      mask: '+{7} (000) 000-00-00'
    };
    var mask = IMask(element, maskOptions);
    $('.popup_question_form').on('submit', function(event) {
        event.preventDefault()
        let label = document.querySelector('.popup_question_lb');
        if($("#popup_question_tel").val().length < 18){
            label.classList.add('wrong');
            label.innerHTML = 'Пожалуйста, заполните поле!';
          return;
        }
        else{
            label.classList.remove('wrong');
            label.innerHTML = 'Ваш телефон:';
            $('.popup_question').removeClass('active');
            $('.popup_situation_res_sec').addClass('active');
            $('.popup_ask_res_ok').on('click', function() {
                $('.popup_situation_res_sec').removeClass('active');
                $('body').removeClass('lock');
            });
            $('.popup_situation_res_sec').on('click', function(event) {
                if ($(event.target).closest('.popup_ask_content_res').length == 0) {
                    $('.popup_situation_res_sec').removeClass('active');
                    $('body').removeClass('lock');
                }
            });
        }
    });
});


jQuery(function() {
    var element = document.getElementById('edit_student_profile_tel_in');
    var maskOptions = {
      mask: '+{7} (000) 000-00-00'
    };
    var mask = IMask(element, maskOptions);
    $('.edit_student_profile_form').on('submit', function(event) {
        event.preventDefault()
        if($("#edit_student_profile_tel_in").val().length < 18){
            $('.edit_student_profile_tel_in').addClass('wrong');
          return;
        }
        else{
            $('.edit_student_profile_tel_in').removeClass('wrong');
        }
    });
});

jQuery(function() {
    var element = document.getElementById('auto_popup_input_num');
    var maskOptions = {
      mask: '+{7} (000) 000-00-00'
    };
    var mask = IMask(element, maskOptions);
    $('.auto_popup_form').on('submit', function(event) {
        event.preventDefault()
        let label = document.querySelector('.auto_popup_num_lb');
        if($("#auto_popup_input_num").val().length < 18){
            label.classList.add('wrong');
            label.innerHTML = 'Пожалуйста, заполните поле!';
          return;
        }
        else{
            label.classList.remove('wrong');
            label.innerHTML = 'Телефон:';
            $('.autorize_popup').removeClass('active');
            $('.authorization_popup').addClass('active');
            $('body').addClass('lock');
            $('.reg_pop_close').on('click', function (event) {
                $('.authorization_popup').removeClass('active');
                $('body').removeClass('lock');
            });
            $('.authorization_popup').on('click', function (event) {
                if ($(event.target).closest('.author_popup').length == 0) {
                    $('.authorization_popup').removeClass('active');
                    $('body').removeClass('lock');
                }
            });
        }
        this.submit();
    });
});

jQuery(function() {
    var elementi = document.getElementById('reg_pop_number_input');
    let label = document.getElementById('reg_pop_number_lb');
    var maskOptionsi = {
      mask: '+{7} (000) 000-00-00'
    };
    var mask = IMask(elementi, maskOptionsi);
    $('.reg_pop_form').on('submit', function(event) {
        event.preventDefault();
    
        if($("#reg_pop_number_input").val().length < 18){
            label.classList.add('show');
            label.innerHTML = 'Пожалуйста, заполните поле!';
            return;
        }
        else{
            label.classList.remove('show');
            label.innerHTML = 'Телефон:';
            $('.register_popup').removeClass('active');
            $('.register_success').addClass('active');
    
            $('.reg_pop_close').on('click', function (event) {
                $('.register_success').removeClass('active');
                $('body').removeClass('lock');
                return false;
            });
            $('.register_success').on('click', function (event) {
                if ($(event.target).closest('.reg_suc_content').length == 0) {
                    $('.register_success').removeClass('active');
                    $('body').removeClass('lock');
                }
            });
            this.submit();
        }
       
    });
});

jQuery(function() {
    var elementis = document.getElementById('form_course_call_in');
    var maskOptionsis = {
      mask: '+{7} (000) 000-00-00'
    };
    var mask = IMask(elementis, maskOptionsis);
    $('.form_course').on('submit', function(event) {
        event.preventDefault()
    
        if($("#form_course_call_in").val().length < 18){
          $(".notice_text_course").css('display','block')
          console.log('Error');
          return;
        }
        else{
            $(".notice_text_course").css('display','none')
            this.submit();
        }
    });
});

jQuery(function() {
    var elementBy = document.getElementById('main_course_form_call_input');
    var lab = document.getElementById('main_course_form_call_lb')
    var maskOptionsBy = {
      mask: '+{7} (000) 000-00-00'
    };
    var mask = IMask(elementBy, maskOptionsBy);
    $('.main_course_form').on('submit', function(event) {
        event.preventDefault();
    
        if($("#main_course_form_call_input").val().length < 18){
          lab.innerHTML = `Пожалуйста, заполните поле!`;
          lab.classList.add('labbs');
          console.log('Error');
          return;
        }
        else{
            lab.innerHTML = `Тел:`;
            lab.classList.remove('labbs');
        }
    });
});

jQuery(function() {
    var elementBy = document.getElementById('popup_buy_reg_num_in');
    var lab = document.getElementById('popup_buy_reg_bum_lb')
    var maskOptionsBy = {
      mask: '+{7} (000) 000-00-00'
    };
    var mask = IMask(elementBy, maskOptionsBy);
    $('.popup_buy_reg_form').on('submit', function(event) {
        event.preventDefault();
    
        if($("#popup_buy_reg_num_in").val().length < 18){
          lab.innerHTML = `Пожалуйста, заполните поле!`;
          lab.classList.add('labbs');
          return;
        }
        else{
            lab.innerHTML = `Тел:`;
            lab.classList.remove('labbs');
            $('.popup_buy_reg').removeClass('active');
            $('.register_success_2').addClass('active');
            $('.reg_pop_close').on('click', function (event) {
                $('.register_success_2').removeClass('active');
                $('body').removeClass('lock');
            });
            $('.register_success_2').on('click', function (event) {
                if ($(event.target).closest('.reg_suc_content').length == 0) {
                    $('.register_success_2').removeClass('active');
                    $('body').removeClass('lock');
                }
            });
        }
    });
});

jQuery(function() {
    $('.buy_this_course').on('click', function (event) {
        $('.popup_buy_reg').addClass('active');
        $('body').addClass('lock');
    });
    $('.reg_pop_close').on('click', function (event) {
        $('.popup_buy_reg').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.popup_buy_reg').on('click', function (event) {
        if ($(event.target).closest('.popup_buy_reg_content').length == 0) {
            $('.popup_buy_reg').removeClass('active');
            $('body').removeClass('lock');
        }
    });
});

jQuery(function() {
    $('.buy_my_courses').on('click', function (event) {
        $('.popup_start').addClass('active');
        $('body').addClass('lock');
    });
    $('.reg_pop_close').on('click', function (event) {
        $('.popup_start').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.popup_start').on('click', function (event) {
        if ($(event.target).closest('.popup_start_content').length == 0) {
            $('.popup_start').removeClass('active');
            $('body').removeClass('lock');
        }
    });
});

jQuery(function() {
    $('.main_lesson_2_content_body_block_btn').on('click', function (event) {
        $(this).closest('.main_lesson_2_content_body').toggleClass('action');
        if ($('.main_lesson_2_content_body').hasClass('action')) {
            $('.main_lesson_2_content_body_block_btn.test').html("Скрыть");
        }
        else{
            $('.main_lesson_2_content_body_block_btn').html("Показать");
        }
    });
});

jQuery(function() {
    let choice = document.querySelector('.edit_student_profile_sex_in');
    choice.addEventListener('click', showOptions);
    choice.addEventListener('change', hideOptions);
    let opsLink = document.querySelectorAll('.edit_student_profile_sex_list li');
    let opsList = document.querySelector('.edit_student_profile_sex_list');
    function showOptions() {
        opsList.classList.toggle('active')
    }
    function hideOptions() {
        opsList.classList.remove('active')
    }
    for (const i of opsLink) {
        i.onclick = function() {
            choice.value = i.innerHTML;
            opsList.classList.remove('active')
        }
    }
});

jQuery(function() {
    const btnFis = document.querySelector('.main_lesson_2_content_fs_top_btn');
    $('.main_lesson_2_content_fs_top_btn').on('click', function (event) {
        $('.main_lesson_2_content_fs_block_hidden').toggleClass('shown_block');
        if ($('.main_lesson_2_content_fs_block_hidden').hasClass('shown_block')) {
            btnFis.innerHTML = 'Скрыть';
        }
        else {
            btnFis.innerHTML = 'Раскрыть';
        }
    });
});


jQuery(function() {
    const btnHid = document.querySelector('.main_lesson_2_content_sc_link');
    const btnSec = document.querySelector('.main_lesson_2_content_sc_top_btn');
    $('.main_lesson_2_content_sc_link, .main_lesson_2_content_sc_top_btn').on('click', function (event) {
        $('.main_lesson_2_content_sc_block_hidden').toggleClass('shown_block');
        if ($('.main_lesson_2_content_sc_block_hidden').hasClass('shown_block')) {
            btnHid.innerHTML = 'Скрыть';
            btnSec.innerHTML = 'Скрыть';
        }
        else {
            btnHid.innerHTML = 'Развернуть';
            btnSec.innerHTML = 'Раскрыть';
        }
    });
});

jQuery(function() {
    let regSucc = document.getElementById('reg_suc_eye');
    regSucc.addEventListener('click', showMoreThan);
    function showMoreThan () {
        let inpu = document.getElementById('reg_suc_pass_input');
        if (inpu.getAttribute('type') == 'password') {
            inpu.setAttribute('type', 'text');
        }
        else{
            inpu.setAttribute('type', 'password');
        }
    }
});
jQuery(function() {
    let regSucc = document.getElementById('reg_suc_eye_2_');
    regSucc.addEventListener('click', showMoreThan);
    function showMoreThan () {
        let inpu = document.getElementById('reg_suc_pass_input_2');
        if (inpu.getAttribute('type') == 'password') {
            inpu.setAttribute('type', 'text');
        }
        else{
            inpu.setAttribute('type', 'password');
        }
    }
});

jQuery(function() {
    $('.reg_suc_form_2_').on('submit', function() {
        $('.register_success_2').removeClass('active');
        $('.popup_start').addClass('active');
    });
    $('.reg_pop_close').on('click', function() {
        $('.popup_start').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.popup_start').on('click', function(event) {
        if ($(event.target).closest('.popup_start_content').length == 0) {    
            $('.popup_start').removeClass('active');
            $('body').removeClass('lock');
        }
    });
});

jQuery(function() {
    $('#popup_start_btn').on('click', function() {
        new AirDatepicker('#datepicker', {
            buttons: ['today', 'clear'],
            locale: {
                days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                today: 'Сегодня',
                clear: 'Очистить',
                dateFormat: 'dd.MM.yyyy',
                timeFormat: 'hh:mm aa',
                firstDay: 0
            }
        });
    });
});

jQuery(function() {
    $('.popup_start_form').on('submit', function(event) {
        event.preventDefault();
        $('.popup_start').removeClass('active');
        $('.popup_payment').addClass('active');
    });
    $('.reg_pop_close').on('click', function() {
        $('.popup_payment').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.popup_payment').on('click', function(event) {
        if ($(event.target).closest('.popup_payment_content').length == 0) {    
            $('.popup_payment').removeClass('active');
            $('body').removeClass('lock');
        }
    });
});

jQuery(function() {
    $('.popup_payment_sum').on('click', function(event) {
        event.preventDefault();
        $('.popup_payment').removeClass('active');
        $('.payment_end').addClass('active');
    });
    $('#payment_end_btn').on('click', function() {
        $('.payment_end').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.payment_end').on('click', function(event) {
        if ($(event.target).closest('.payment_end_content').length == 0) {    
            $('.payment_end').removeClass('active');
            $('body').removeClass('lock');
        }
    });
});

jQuery(function() {
    var elementBy = document.getElementById('datepicker');
    var maskOptionsBy = {
      mask: '00.00.0000'
    };
    var mask = IMask(elementBy, maskOptionsBy);
});

jQuery(function() {
    let seePass = document.getElementById('author_popup_eye');
    seePass.addEventListener('click', showSeePass);
    function showSeePass() {
        let inputType = document.getElementById('author_pass_input');
        if (inputType.getAttribute('type') == 'password') {
            inputType.setAttribute('type', 'text');
        }
        else {
            inputType.setAttribute('type', 'password');
        }
    }
});


(function (window) {
    'use strict';
    function classReg( className ) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    var hasClass, addClass, removeClass;
    if ( 'classList' in document.documentElement ) {
        hasClass = function( elem, c ) {
            return elem.classList.contains( c );
        };
        addClass = function( elem, c ) {
            elem.classList.add( c );
        };
        removeClass = function( elem, c ) {
            elem.classList.remove( c );
        };
    }
    else {
        hasClass = function( elem, c ) {
            return classReg( c ).test( elem.className );
        };
        addClass = function( elem, c ) {
            if ( !hasClass( elem, c ) ) {
            elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function( elem, c ) {
            elem.className = elem.className.replace( classReg( c ), ' ' );
        };
    }
    
    function toggleClass( elem, c ) {
        var fn = hasClass( elem, c ) ? removeClass : addClass;
        fn( elem, c );
    }
    var classie = {
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };
    if ( typeof define === 'function' && define.amd ) {
        define( classie );
    } else {
        window.classie = classie;
    }

})( window );

// var si = function(selector){
//     return document.querySelector(selector);
// }
var accordion = $('.accordion');
accordion.on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    if(e.target && e.target.nodeName == "A") {
        var classes = e.target.className.split(" ");
        if(classes) {
            for(var x = 0; x < classes.length; x++) {
                if(classes[x] == "accordionTitle") {
                    var title = e.target;
                    var content = e.target.parentNode.nextElementSibling;
                    classie.toggle(title, 'accordionTitleActive');
                    if(classie.has(content, 'accordionItemCollapsed')) {
                        if(classie.has(content, 'animateOut')){
                            classie.remove(content, 'animateOut');
                        }
                        classie.add(content, 'animateIn');
                    }
                    else{
                        classie.remove(content, 'animateIn');
                        classie.add(content, 'animateOut');
                    }
                    classie.toggle(content, 'accordionItemCollapsed');      
                }
            }
        }  
    }
});

jQuery(function() {
    var map;
    DG.then(function () {
      map = DG.map('map', {
        center: [43.248836, 76.957066],
        zoom: 17
      });
      DG.marker([43.248836, 76.957306]).addTo(map);
    });
});