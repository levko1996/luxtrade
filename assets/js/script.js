$(document).ready(function () {
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  };

  function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
  }

  if (isIE()) {
    $('body').addClass('ie');
  }

  if (isMobile.any()) {
    $('body').addClass('touch');
  }

  function testWebP(callback) {
    var webP = new Image();

    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    }
  });
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  };

  if (isMobile.any()) {}

  if (location.hash) {
    var hsh = location.hash.replace('#', '');

    if ($('.popup-' + hsh).length > 0) {
      popupOpen(hsh);
    } else if ($('div.' + hsh).length > 0) {
      $('body,html').animate({
        scrollTop: $('div.' + hsh).offset().top
      }, 500, function () {});
    }
  }

  $('.wrapper').addClass('loaded');
  var act = "click";

  if (isMobile.iOS()) {
    var act = "touchstart";
  } // $('.icon-menu').click(function (event) {
  // 	$(this).toggleClass('_active');
  // 	$('.menu__body').toggleClass('_active');
  // 	if ($(this).hasClass('_active')) {
  // 		$('body').data('scroll', $(window).scrollTop());
  // 	}
  // 	$('body').toggleClass('lock');
  // 	if (!$(this).hasClass('_active')) {
  // 		$('body,html').scrollTop(parseInt($('body').data('scroll')));
  // 	}
  // });


  var iconMenu = document.querySelector(".icon-menu");

  if (iconMenu != null) {
    var delay = 500;
    var body = document.querySelector("body");
    var menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", function (e) {
      if (!body.classList.contains('_wait')) {
        body_lock(delay);
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
      }
    });
  }

  ;

  function menu_close() {
    var iconMenu = document.querySelector(".icon-menu");
    var menuBody = document.querySelector(".menu__body");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
  } //=================
  //BodyLock


  function body_lock(delay) {
    var body = document.querySelector("body");

    if (body.classList.contains('_lock')) {
      body_lock_remove(delay);
    } else {
      body_lock_add(delay);
    }
  }

  function body_lock_remove(delay) {
    var body = document.querySelector("body");

    if (!body.classList.contains('_wait')) {
      var lock_padding = document.querySelectorAll("._lp");
      setTimeout(function () {
        for (var index = 0; index < lock_padding.length; index++) {
          var el = lock_padding[index];
          el.style.paddingRight = '0px';
        }

        body.style.paddingRight = '0px';
        body.classList.remove("_lock");
      }, delay);
      body.classList.add("_wait");
      setTimeout(function () {
        body.classList.remove("_wait");
      }, delay);
    }
  }

  function body_lock_add(delay) {
    var body = document.querySelector("body");

    if (!body.classList.contains('_wait')) {
      var lock_padding = document.querySelectorAll("._lp");

      for (var index = 0; index < lock_padding.length; index++) {
        var el = lock_padding[index];
        el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      }

      body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
      body.classList.add("_lock");
      body.classList.add("_wait");
      setTimeout(function () {
        body.classList.remove("_wait");
      }, delay);
    }
  } //ZOOM


  if ($('.gallery').length > 0) {
    baguetteBox.run('.gallery', {// Custom options
    });
  }
  /*
  CLOUD-ZOOM
  <a rel="position:'right',adjustX:25,adjustY:0,Width: 432" href="img/product/zoom.jpg" class="cloud-zoom product-main-mainimage__item">
  	<img class="cloudzoom-gallery" src="img/product/zoom.jpg" alt="" />
  </a>
  */
  //POPUP


  $('.pl').click(function (event) {
    var pl = $(this).attr('href').replace('#', '');
    var v = $(this).data('vid');
    popupOpen(pl, v);
    return false;
  });

  function popupOpen(pl, v) {
    $('.popup').removeClass('active').hide();

    if (!$('.header-menu').hasClass('active')) {
      $('body').data('scroll', $(window).scrollTop());
    }

    if (!isMobile.any()) {
      $('body').css({
        paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth()
      }).addClass('lock');
      $('.pdb').css({
        paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth()
      });
    } else {
      setTimeout(function () {
        $('body').addClass('lock');
      }, 300);
    }

    history.pushState('', '', '#' + pl);

    if (v != '' && v != null) {
      $('.popup-' + pl + ' .popup-video__value').html('<iframe src="https://www.youtube.com/embed/' + v + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');
    }

    $('.popup-' + pl).fadeIn(300).delay(300).addClass('active');

    if ($('.popup-' + pl).find('.slick-slider').length > 0) {
      $('.popup-' + pl).find('.slick-slider').slick('setPosition');
    }
  }

  function openPopupById(popup_id) {
    $('#' + popup_id).fadeIn(300).delay(300).addClass('active');
  }

  function popupClose() {
    $('.popup').removeClass('active').fadeOut(300);

    if (!$('.header-menu').hasClass('active')) {
      if (!isMobile.any()) {
        setTimeout(function () {
          $('body').css({
            paddingRight: 0
          });
          $('.pdb').css({
            paddingRight: 0
          });
        }, 200);
        setTimeout(function () {
          $('body').removeClass('lock');
          $('body,html').scrollTop(parseInt($('body').data('scroll')));
        }, 200);
      } else {
        $('body').removeClass('lock');
        $('body,html').scrollTop(parseInt($('body').data('scroll')));
      }
    }

    $('.popup-video__value').html('');
    history.pushState('', '', window.location.href.split('#')[0]);
  }

  $('.popup-close,.popup__close').click(function (event) {
    popupClose();
    return false;
  });
  $('.popup').click(function (e) {
    if (!$(e.target).is(".popup>.popup-table>.cell *") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {
      popupClose();
      return false;
    }
  });
  $(document).on('keydown', function (e) {
    if (e.which == 27) {
      popupClose();
    }
  });

  function ibg() {
    $.each($('.ibg'), function (index, val) {
      if ($(this).find('img').length > 0) {
        $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
      }
    });
  }

  ibg(); //Клик вне области

  $(document).on('click touchstart', function (e) {
    if (!$(e.target).is(".select *")) {
      $('.select').removeClass('active');
    }

    ;
  }); //UP

  $(window).scroll(function () {
    var w = $(window).width();

    if ($(window).scrollTop() > 50) {
      $('#up').fadeIn(300);
    } else {
      $('#up').fadeOut(300);
    }
  });
  $('#up').click(function (event) {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
  });
  $('body').on('click', '.tab__navitem', function (event) {
    var eq = $(this).index();

    if ($(this).hasClass('parent')) {
      var eq = $(this).parent().index();
    }

    if (!$(this).hasClass('active')) {
      $(this).closest('.tabs').find('.tab__navitem').removeClass('active');
      $(this).addClass('active');
      $(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');

      if ($(this).closest('.tabs').find('.slick-slider').length > 0) {
        $(this).closest('.tabs').find('.slick-slider').slick('setPosition');
      }
    }
  });
  $.each($('.spoller.active'), function (index, val) {
    $(this).next().show();
  });
  $('body').on('click', '.spoller', function (event) {
    if ($(this).hasClass('mob') && !isMobile.any()) {
      return false;
    }

    if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
      $.each($(this).closest('.spollers').find('.spoller'), function (index, val) {
        $(this).removeClass('active');
        $(this).next().slideUp(300);
      });
    }

    $(this).toggleClass('active').next().slideToggle(300, function (index, val) {
      if ($(this).parent().find('.slick-slider').length > 0) {
        $(this).parent().find('.slick-slider').slick('setPosition');
      }
    });
    return false;
  });

  function scrolloptions() {
    var scs = 100;
    var mss = 50;
    var bns = false;

    if (isMobile.any()) {
      scs = 10;
      mss = 1;
      bns = true;
    }

    var opt = {
      cursorcolor: "#fff",
      cursorwidth: "4px",
      background: "",
      autohidemode: true,
      cursoropacitymax: 0.4,
      bouncescroll: bns,
      cursorborderradius: "0px",
      scrollspeed: scs,
      mousescrollstep: mss,
      directionlockdeadzone: 0,
      cursorborder: "0px solid #fff"
    };
    return opt;
  }

  function scroll() {
    $('.scroll-body').niceScroll('.scroll-list', scrolloptions());
  }

  if (navigator.appVersion.indexOf("Mac") != -1) {} else {
    if ($('.scroll-body').length > 0) {
      scroll();
    }
  }
  /*
  function scrollwhouse(){
  		var scs=100;
  		var mss=50;
  		var bns=false;
  	if(isMobile.any()){
  		scs=10;
  		mss=1;
  		bns=true;
  	}
  	var opt={
  		cursorcolor:"#afafaf",
  		cursorwidth: "5px",
  		background: "",
  		autohidemode:false,
  		railalign: 'left',
  		cursoropacitymax: 1,
  		bouncescroll:bns,
  		cursorborderradius: "0px",
  		scrollspeed:scs,
  		mousescrollstep:mss,
  		directionlockdeadzone:0,
  		cursorborder: "0px solid #fff",
  	};
  	return opt;
  }
  $('.whouse-content-body').niceScroll('.whouse-content-scroll',scrollwhouse());
  $('.whouse-content-body').scroll(function(event) {
  		var s=$(this).scrollTop();
  		var r=Math.abs($(this).outerHeight()-$('.whouse-content-scroll').outerHeight());
  		var p=s/r*100;
  	$('.whouse-content__shadow').css({opacity:1-1/100*p});
  });
  */


  if ($('.t,.tip').length > 0) {
    tip();
  }

  function tip() {
    $('.t,.tip').webuiPopover({
      placement: 'top',
      trigger: 'hover',
      backdrop: false,
      //selector:true,
      animation: 'fade',
      dismissible: true,
      padding: false,
      //hideEmpty: true
      onShow: function ($element) {},
      onHide: function ($element) {}
    }).on('show.webui.popover hide.webui.popover', function (e) {
      $(this).toggleClass('active');
    });
  } //FORMS


  function forms() {
    //SELECT
    if ($('select').length > 0) {
      function selectscrolloptions() {
        var scs = 100;
        var mss = 50;

        if (isMobile.any()) {
          scs = 10;
          mss = 1;
        }

        var opt = {
          cursorcolor: "#2078e5",
          cursorwidth: "3px",
          background: "",
          autohidemode: false,
          bouncescroll: false,
          cursorborderradius: "0px",
          scrollspeed: scs,
          mousescrollstep: mss,
          directionlockdeadzone: 0,
          cursorborder: "0px solid #fff"
        };
        return opt;
      }

      function select() {
        $.each($('select'), function (index, val) {
          var ind = index;
          $(this).hide();

          if ($(this).parent('.select-block').length == 0) {
            $(this).wrap("<div class='select-block " + $(this).attr('class') + "-select-block'></div>");
          } else {
            $(this).parent('.select-block').find('.select').remove();
          }

          var milti = '';
          var check = '';
          var sblock = $(this).parent('.select-block');
          var soptions = "<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";

          if ($(this).attr('multiple') == 'multiple') {
            milti = 'multiple';
            check = 'check';
          }

          $.each($(this).find('option'), function (index, val) {
            if ($(this).attr('value') != '') {
              soptions = soptions + "<div data-value='" + $(this).attr('value') + "' class='select-options__value_" + ind + " select-options__value value_" + $(this).val() + " " + $(this).attr('class') + " " + check + "'>" + $(this).html() + "</div>";
            } else if ($(this).parent().attr('data-label') == 'on') {
              if (sblock.find('.select__label').length == 0) {
                sblock.prepend('<div class="select__label">' + $(this).html() + '</div>');
              }
            }
          });
          soptions = soptions + "</div></div></div>";

          if ($(this).attr('data-type') == 'search') {
            sblock.append("<div data-type='search' class='select_" + ind + " select" + " " + $(this).attr('class') + "__select " + milti + "'>" + "<div class='select-title'>" + "<div class='select-title__arrow ion-ios-arrow-down'></div>" + "<input data-value='" + $(this).find('option[selected="selected"]').html() + "' class='select-title__value value_" + $(this).find('option[selected="selected"]').val() + "' />" + "</div>" + soptions + "</div>");
            $('.select_' + ind).find('input.select-title__value').jcOnPageFilter({
              parentSectionClass: 'select-options_' + ind,
              parentLookupClass: 'select-options__value_' + ind,
              childBlockClass: 'select-options__value_' + ind
            });
          } else {
            sblock.append("<div class='select_" + ind + " select" + " " + $(this).attr('class') + "__select " + milti + "'>" + "<div class='select-title'>" + "<div class='select-title__arrow ion-ios-arrow-down'></div>" + "<div class='select-title__value value_" + $(this).find('option[selected="selected"]').val() + "'>" + $(this).find('option[selected="selected"]').html() + "</div>" + "</div>" + soptions + "</div>");
          }

          if ($(this).find('option[selected="selected"]').val() != '') {
            sblock.find('.select').addClass('focus');
          }

          if ($(this).attr('data-req') == 'on') {
            $(this).addClass('req');
          }

          $(".select_" + ind + " .select-options-scroll").niceScroll('.select-options-list', selectscrolloptions());
        });
      }

      select();
      $('body').on('keyup', 'input.select-title__value', function () {
        $('.select').not($(this).parents('.select')).removeClass('active').find('.select-options').slideUp(50);
        $(this).parents('.select').addClass('active');
        $(this).parents('.select').find('.select-options').slideDown(50, function () {
          $(this).find(".select-options-scroll").getNiceScroll().resize();
        });
        $(this).parents('.select-block').find('select').val('');
      });
      $('body').on('click', '.select', function () {
        if (!$(this).hasClass('disabled')) {
          $('.select').not(this).removeClass('active').find('.select-options').slideUp(50);
          $(this).toggleClass('active');
          $(this).find('.select-options').slideToggle(50, function () {
            $(this).find(".select-options-scroll").getNiceScroll().resize();
          }); //	var input=$(this).parent().find('select');
          //removeError(input);

          if ($(this).attr('data-type') == 'search') {
            if (!$(this).hasClass('active')) {
              searchselectreset();
            }

            $(this).find('.select-options__value').show();
          }
        }
      });
      $('body').on('click', '.select-options__value', function () {
        if ($(this).parents('.select').hasClass('multiple')) {
          if ($(this).hasClass('active')) {
            if ($(this).parents('.select').find('.select-title__value span').length > 0) {
              $(this).parents('.select').find('.select-title__value').append('<span data-value="' + $(this).data('value') + '">, ' + $(this).html() + '</span>');
            } else {
              $(this).parents('.select').find('.select-title__value').data('label', $(this).parents('.select').find('.select-title__value').html());
              $(this).parents('.select').find('.select-title__value').html('<span data-value="' + $(this).data('value') + '">' + $(this).html() + '</span>');
            }

            $(this).parents('.select-block').find('select').find('option').eq($(this).index() + 1).prop('selected', true);
            $(this).parents('.select').addClass('focus');
          } else {
            $(this).parents('.select').find('.select-title__value').find('span[data-value="' + $(this).data('value') + '"]').remove();

            if ($(this).parents('.select').find('.select-title__value span').length == 0) {
              $(this).parents('.select').find('.select-title__value').html($(this).parents('.select').find('.select-title__value').data('label'));
              $(this).parents('.select').removeClass('focus');
            }

            $(this).parents('.select-block').find('select').find('option').eq($(this).index() + 1).prop('selected', false);
          }

          return false;
        }

        if ($(this).parents('.select').attr('data-type') == 'search') {
          $(this).parents('.select').find('.select-title__value').val($(this).html());
          $(this).parents('.select').find('.select-title__value').attr('data-value', $(this).html());
        } else {
          $(this).parents('.select').find('.select-title__value').attr('class', 'select-title__value value_' + $(this).data('value'));
          $(this).parents('.select').find('.select-title__value').html($(this).html());
        }

        $(this).parents('.select-block').find('select').find('option').removeAttr("selected");

        if ($.trim($(this).data('value')) != '') {
          $(this).parents('.select-block').find('select').val($(this).data('value'));
          $(this).parents('.select-block').find('select').find('option[value="' + $(this).data('value') + '"]').attr('selected', 'selected');
        } else {
          $(this).parents('.select-block').find('select').val($(this).html());
          $(this).parents('.select-block').find('select').find('option[value="' + $(this).html() + '"]').attr('selected', 'selected');
        }

        if ($(this).parents('.select-block').find('select').val() != '') {
          $(this).parents('.select-block').find('.select').addClass('focus');
        } else {
          $(this).parents('.select-block').find('.select').removeClass('focus');
          $(this).parents('.select-block').find('.select').removeClass('err');
          $(this).parents('.select-block').parent().removeClass('err');
          $(this).parents('.select-block').removeClass('err').find('.form__error').remove();
        }

        if (!$(this).parents('.select').data('tags') != "") {
          if ($(this).parents('.form-tags').find('.form-tags__item[data-value="' + $(this).data('value') + '"]').length == 0) {
            $(this).parents('.form-tags').find('.form-tags-items').append('<a data-value="' + $(this).data('value') + '" href="" class="form-tags__item">' + $(this).html() + '<span class="fa fa-times"></span></a>');
          }
        }

        $(this).parents('.select-block').find('select').change();

        if ($(this).parents('.select-block').find('select').data('update') == 'on') {
          select();
        }
      });
      $(document).on('click touchstart', function (e) {
        if (!$(e.target).is(".select *") && !$(e.target).is(".select")) {
          $('.select').removeClass('active');
          $('.select-options').slideUp(50, function () {});
          searchselectreset();
        }

        ;
      });
      $(document).on('keydown', function (e) {
        if (e.which == 27) {
          $('.select').removeClass('active');
          $('.select-options').slideUp(50, function () {});
          searchselectreset();
        }
      });
    } //FIELDS


    $('input,textarea').focus(function () {
      if ($(this).val() == $(this).attr('data-value')) {
        $(this).addClass('focus');
        $(this).parent().addClass('focus');

        if ($(this).attr('data-type') == 'pass') {
          $(this).attr('type', 'password');
        }

        ;
        $(this).val('');
      }

      ;
      removeError($(this));
    });
    $('input[data-value], textarea[data-value]').each(function () {
      if (this.value == '' || this.value == $(this).attr('data-value')) {
        this.value = $(this).attr('data-value');

        if ($(this).hasClass('l') && $(this).parent().find('.form__label').length == 0) {
          $(this).parent().append('<div class="form__label">' + $(this).attr('data-value') + '</div>');
        }
      }

      if (this.value != $(this).attr('data-value') && this.value != '') {
        $(this).addClass('focus');
        $(this).parent().addClass('focus');

        if ($(this).hasClass('l') && $(this).parent().find('.form__label').length == 0) {
          $(this).parent().append('<div class="form__label">' + $(this).attr('data-value') + '</div>');
        }
      }

      $(this).click(function () {
        if (this.value == $(this).attr('data-value')) {
          if ($(this).attr('data-type') == 'pass') {
            $(this).attr('type', 'password');
          }

          ;
          this.value = '';
        }

        ;
      });
      $(this).blur(function () {
        if (this.value == '') {
          this.value = $(this).attr('data-value');
          $(this).removeClass('focus');
          $(this).parent().removeClass('focus');

          if ($(this).attr('data-type') == 'pass') {
            $(this).attr('type', 'text');
          }

          ;
        }

        ;
      });
    });
    $('.form-input__viewpass').click(function (event) {
      if ($(this).hasClass('active')) {
        $(this).parent().find('input').attr('type', 'password');
      } else {
        $(this).parent().find('input').attr('type', 'text');
      }

      $(this).toggleClass('active');
    }); //$('textarea').autogrow({vertical: true, horizontal: false});
    //MASKS//
    //'+7(999) 999 9999'
    //'+38(999) 999 9999'
    //'+375(99)999-99-99'
    //'a{3,1000}' только буквы минимум 3
    //'9{3,1000}' только цифры минимум 3

    $.each($('input.phone'), function (index, val) {
      $(this).attr('type', 'tel');
      $(this).focus(function () {
        $(this).inputmask('+38(999) 999 9999', {
          clearIncomplete: true,
          clearMaskOnLostFocus: true,
          "onincomplete": function () {
            maskclear($(this));
          }
        });
        $(this).addClass('focus');
        $(this).parent().addClass('focus');
        $(this).parent().removeClass('err');
        $(this).removeClass('err');
      });
    });
    $('input.phone').focusout(function (event) {
      maskclear($(this));
    });
    $.each($('input.num'), function (index, val) {
      $(this).focus(function () {
        $(this).inputmask('9{1,1000}', {
          clearIncomplete: true,
          placeholder: "",
          clearMaskOnLostFocus: true,
          "onincomplete": function () {
            maskclear($(this));
          }
        });
        $(this).addClass('focus');
        $(this).parent().addClass('focus');
        $(this).parent().removeClass('err');
        $(this).removeClass('err');
      });
    });
    $('input.num').focusout(function (event) {
      maskclear($(this));
    }); //CHECK

    $.each($('.check'), function (index, val) {
      if ($(this).find('input').prop('checked') == true) {
        $(this).addClass('active');
      }
    });
    $('body').off('click', '.check', function (event) {});
    $('body').on('click', '.check', function (event) {
      if (!$(this).hasClass('disable')) {
        var target = $(event.target);

        if (!target.is("a")) {
          $(this).toggleClass('active');

          if ($(this).hasClass('active')) {
            $(this).find('input').prop('checked', true);
          } else {
            $(this).find('input').prop('checked', false);
          }
        }
      }
    }); //OPTION

    $.each($('.option.active'), function (index, val) {
      $(this).find('input').prop('checked', true);
    });
    $('.option').click(function (event) {
      if (!$(this).hasClass('disable')) {
        if ($(this).hasClass('active') && $(this).hasClass('order')) {
          $(this).toggleClass('orderactive');
        }

        $(this).parents('.options').find('.option').removeClass('active');
        $(this).toggleClass('active');
        $(this).children('input').prop('checked', true);
      }
    }); //RATING

    $('.rating.edit .star').hover(function () {
      var block = $(this).parents('.rating');
      block.find('.rating__activeline').css({
        width: '0%'
      });
      var ind = $(this).index() + 1;
      var linew = ind / block.find('.star').length * 100;
      setrating(block, linew);
    }, function () {
      var block = $(this).parents('.rating');
      block.find('.star').removeClass('active');
      var ind = block.find('input').val();
      var linew = ind / block.find('.star').length * 100;
      setrating(block, linew);
    });
    $('.rating.edit .star').click(function (event) {
      var block = $(this).parents('.rating');
      var re = $(this).index() + 1;
      block.find('input').val(re);
      var linew = re / block.find('.star').length * 100;
      setrating(block, linew);
    });
    $.each($('.rating'), function (index, val) {
      var ind = $(this).find('input').val();
      var linew = ind / $(this).parent().find('.star').length * 100;
      setrating($(this), linew);
    });

    function setrating(th, val) {
      th.find('.rating__activeline').css({
        width: val + '%'
      });
    } //QUANTITY


    $('.quantity__btn').click(function (event) {
      var n = parseInt($(this).parent().find('.quantity__input').val());

      if ($(this).hasClass('dwn')) {
        n = n - 1;

        if (n < 1) {
          n = 1;
        }
      } else {
        n = n + 1;
      }

      $(this).parent().find('.quantity__input').val(n);
      return false;
    }); //RANGE

    if ($("#range").length > 0) {
      $("#range").slider({
        range: true,
        min: 0,
        max: 5000,
        values: [0, 5000],
        slide: function (event, ui) {
          $('#rangefrom').val(ui.values[0]);
          $('#rangeto').val(ui.values[1]);
          $(this).find('.ui-slider-handle').eq(0).html('<span>' + ui.values[0] + '</span>');
          $(this).find('.ui-slider-handle').eq(1).html('<span>' + ui.values[1] + '</span>');
        },
        change: function (event, ui) {
          if (ui.values[0] != $("#range").slider("option", "min") || ui.values[1] != $("#range").slider("option", "max")) {
            $('#range').addClass('act');
          } else {
            $('#range').removeClass('act');
          }
        }
      });
      $('#rangefrom').val($("#range").slider("values", 0));
      $('#rangeto').val($("#range").slider("values", 1));
      $("#range").find('.ui-slider-handle').eq(0).html('<span>' + $("#range").slider("option", "min") + '</span>');
      $("#range").find('.ui-slider-handle').eq(1).html('<span>' + $("#range").slider("option", "max") + '</span>');
      $("#rangefrom").bind("change", function () {
        if ($(this).val() * 1 > $("#range").slider("option", "max") * 1) {
          $(this).val($("#range").slider("option", "max"));
        }

        if ($(this).val() * 1 < $("#range").slider("option", "min") * 1) {
          $(this).val($("#range").slider("option", "min"));
        }

        $("#range").slider("values", 0, $(this).val());
      });
      $("#rangeto").bind("change", function () {
        if ($(this).val() * 1 > $("#range").slider("option", "max") * 1) {
          $(this).val($("#range").slider("option", "max"));
        }

        if ($(this).val() * 1 < $("#range").slider("option", "min") * 1) {
          $(this).val($("#range").slider("option", "min"));
        }

        $("#range").slider("values", 1, $(this).val());
      });
      $("#range").find('.ui-slider-handle').eq(0).addClass('left');
      $("#range").find('.ui-slider-handle').eq(1).addClass('right');
    } //ADDFILES


    $('.form-addfile__input').change(function (e) {
      if ($(this).val() != '') {
        var ts = $(this);
        ts.parents('.form-addfile').find('ul.form-addfile-list').html('');
        $.each(e.target.files, function (index, val) {
          if (ts.parents('.form-addfile').find('ul.form-addfile-list>li:contains("' + e.target.files[index].name + '")').length == 0) {
            ts.parents('.form-addfile').find('ul.form-addfile-list').append('<li>' + e.target.files[index].name + '</li>');
          }
        });
      }
    });
  }

  forms();

  function digi(str) {
    var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    return r;
  } //VALIDATE FORMS


  $('form button[type=submit]').click(function () {
    var er = 0;
    var form = $(this).parents('form');
    var ms = form.data('ms');
    $.each(form.find('.req'), function (index, val) {
      er += formValidate($(this));
    });

    if (er == 0) {
      removeFormError(form);
      /*
      	var messagehtml='';
      if(form.hasClass('editprofile')){
      	var messagehtml='';
      }
      formLoad();
      */
      //ОПТРАВКА ФОРМЫ

      /*
      function showResponse(html){
      	if(!form.hasClass('nomessage')){
      		showMessage(messagehtml);
      	}
      	if(!form.hasClass('noclear')){
      		clearForm(form);
      	}
      }
      var options={
      	success:showResponse
      };
      	form.ajaxForm(options);
      
      		setTimeout(function(){
      	if(!form.hasClass('nomessage')){
      		//showMessage(messagehtml);
      		showMessageByClass(ms);
      	}
      	if(!form.hasClass('noclear')){
      		clearForm(form);
      	}
      },0);
      		return false;
      */

      if (ms != null && ms != '') {
        showMessageByClass(ms);
        return false;
      }
    } else {
      return false;
    }
  });

  function formValidate(input) {
    var er = 0;
    var form = input.parents('form');

    if (input.attr('name') == 'email' || input.hasClass('email')) {
      if (input.val() != input.attr('data-value')) {
        var em = input.val().replace(" ", "");
        input.val(em);
      }

      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input.val()) || input.val() == input.attr('data-value')) {
        er++;
        addError(input);
      } else {
        removeError(input);
      }
    } else {
      if (input.val() == '' || input.val() == input.attr('data-value')) {
        er++;
        addError(input);
      } else {
        removeError(input);
      }
    }

    if (input.attr('type') == 'checkbox') {
      if (input.prop('checked') == true) {
        input.removeClass('err').parent().removeClass('err');
      } else {
        er++;
        input.addClass('err').parent().addClass('err');
      }
    }

    if (input.hasClass('name')) {
      if (!/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(input.val())) {
        er++;
        addError(input);
      }
    }

    if (input.hasClass('pass-2')) {
      if (form.find('.pass-1').val() != form.find('.pass-2').val()) {
        addError(input);
      } else {
        removeError(input);
      }
    }

    return er;
  }

  function formLoad() {
    $('.popup').hide();
    $('.popup-message-body').hide();
    $('.popup-message .popup-body').append('<div class="popup-loading"><div class="popup-loading__title">Идет загрузка...</div><div class="popup-loading__icon"></div></div>');
    $('.popup-message').addClass('active').fadeIn(300);
  }

  function showMessageByClass(ms) {
    $('.popup').hide();
    popupOpen('message.' + ms, '');
  }

  function showMessage(html) {
    $('.popup-loading').remove();
    $('.popup-message-body').show().html(html);
  }

  function clearForm(form) {
    $.each(form.find('.input'), function (index, val) {
      $(this).removeClass('focus').val($(this).data('value'));
      $(this).parent().removeClass('focus');

      if ($(this).hasClass('phone')) {
        maskclear($(this));
      }
    });
  }

  function addError(input) {
    input.addClass('err');
    input.parent().addClass('err');
    input.parent().find('.form__error').remove();

    if (input.hasClass('email')) {
      var error = '';

      if (input.val() == '' || input.val() == input.attr('data-value')) {
        error = input.data('error');
      } else {
        error = input.data('error');
      }

      if (error != null) {
        input.parent().append('<div class="form__error">' + error + '</div>');
      }
    } else {
      if (input.data('error') != null && input.parent().find('.form__error').length == 0) {
        input.parent().append('<div class="form__error">' + input.data('error') + '</div>');
      }
    }

    if (input.parents('.select-block').length > 0) {
      input.parents('.select-block').parent().addClass('err');
      input.parents('.select-block').find('.select').addClass('err');
    }
  }

  function addErrorByName(form, input__name, error_text) {
    var input = form.find('[name="' + input__name + '"]');
    input.attr('data-error', error_text);
    addError(input);
  }

  function addFormError(form, error_text) {
    form.find('.form__generalerror').show().html(error_text);
  }

  function removeFormError(form) {
    form.find('.form__generalerror').hide().html('');
  }

  function removeError(input) {
    input.removeClass('err');
    input.parent().removeClass('err');
    input.parent().find('.form__error').remove();

    if (input.parents('.select-block').length > 0) {
      input.parents('.select-block').parent().removeClass('err');
      input.parents('.select-block').find('.select').removeClass('err').removeClass('active'); //input.parents('.select-block').find('.select-options').hide();
    }
  }

  function removeFormErrors(form) {
    form.find('.err').removeClass('err');
    form.find('.form__error').remove();
  }

  function maskclear(n) {
    if (n.val() == "") {
      n.inputmask('remove');
      n.val(n.attr('data-value'));
      n.removeClass('focus');
      n.parent().removeClass('focus');
    }
  }

  function searchselectreset() {
    $.each($('.select[data-type="search"]'), function (index, val) {
      var block = $(this).parent();
      var select = $(this).parent().find('select');

      if ($(this).find('.select-options__value:visible').length == 1) {
        $(this).addClass('focus');
        $(this).parents('.select-block').find('select').val($('.select-options__value:visible').data('value'));
        $(this).find('.select-title__value').val($('.select-options__value:visible').html());
        $(this).find('.select-title__value').attr('data-value', $('.select-options__value:visible').html());
      } else if (select.val() == '') {
        $(this).removeClass('focus');
        block.find('input.select-title__value').val(select.find('option[selected="selected"]').html());
        block.find('input.select-title__value').attr('data-value', select.find('option[selected="selected"]').html());
      }
    });
  }

  "use strict";

  (function () {
    let originalPositions = [];
    let daElements = document.querySelectorAll('[data-da]');
    let daElementsArray = [];
    let daMatchMedia = []; //Заполняем массивы

    if (daElements.length > 0) {
      let number = 0;

      for (let index = 0; index < daElements.length; index++) {
        const daElement = daElements[index];
        const daMove = daElement.getAttribute('data-da');

        if (daMove != '') {
          const daArray = daMove.split(',');
          const daPlace = daArray[1] ? daArray[1].trim() : 'last';
          const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
          const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
          const daDestination = document.querySelector('.' + daArray[0].trim());

          if (daArray.length > 0 && daDestination) {
            daElement.setAttribute('data-da-index', number); //Заполняем массив первоначальных позиций

            originalPositions[number] = {
              "parent": daElement.parentNode,
              "index": indexInParent(daElement)
            }; //Заполняем массив элементов 

            daElementsArray[number] = {
              "element": daElement,
              "destination": document.querySelector('.' + daArray[0].trim()),
              "place": daPlace,
              "breakpoint": daBreakpoint,
              "type": daType
            };
            number++;
          }
        }
      }

      dynamicAdaptSort(daElementsArray); //Создаем события в точке брейкпоинта

      for (let index = 0; index < daElementsArray.length; index++) {
        const el = daElementsArray[index];
        const daBreakpoint = el.breakpoint;
        const daType = el.type;
        daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
        daMatchMedia[index].addListener(dynamicAdapt);
      }
    } //Основная функция


    function dynamicAdapt(e) {
      for (let index = 0; index < daElementsArray.length; index++) {
        const el = daElementsArray[index];
        const daElement = el.element;
        const daDestination = el.destination;
        const daPlace = el.place;
        const daBreakpoint = el.breakpoint;
        const daClassname = "_dynamic_adapt_" + daBreakpoint;

        if (daMatchMedia[index].matches) {
          //Перебрасываем элементы
          if (!daElement.classList.contains(daClassname)) {
            let actualIndex = indexOfElements(daDestination)[daPlace];

            if (daPlace === 'first') {
              actualIndex = indexOfElements(daDestination)[0];
            } else if (daPlace === 'last') {
              actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
            }

            daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
            daElement.classList.add(daClassname);
          }
        } else {
          //Возвращаем на место
          if (daElement.classList.contains(daClassname)) {
            dynamicAdaptBack(daElement);
            daElement.classList.remove(daClassname);
          }
        }
      }

      customAdapt();
    } //Вызов основной функции


    dynamicAdapt(); //Функция возврата на место

    function dynamicAdaptBack(el) {
      const daIndex = el.getAttribute('data-da-index');
      const originalPlace = originalPositions[daIndex];
      const parentPlace = originalPlace['parent'];
      const indexPlace = originalPlace['index'];
      const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
      parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
    } //Функция получения индекса внутри родителя


    function indexInParent(el) {
      var children = Array.prototype.slice.call(el.parentNode.children);
      return children.indexOf(el);
    } //Функция получения массива индексов элементов внутри родителя 


    function indexOfElements(parent, back) {
      const children = parent.children;
      const childrenArray = [];

      for (let i = 0; i < children.length; i++) {
        const childrenElement = children[i];

        if (back) {
          childrenArray.push(i);
        } else {
          //Исключая перенесенный элемент
          if (childrenElement.getAttribute('data-da') == null) {
            childrenArray.push(i);
          }
        }
      }

      return childrenArray;
    } //Сортировка объекта


    function dynamicAdaptSort(arr) {
      arr.sort(function (a, b) {
        if (a.breakpoint > b.breakpoint) {
          return -1;
        } else {
          return 1;
        }
      });
      arr.sort(function (a, b) {
        if (a.place > b.place) {
          return 1;
        } else {
          return -1;
        }
      });
    } //Дополнительные сценарии адаптации


    function customAdapt() {//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
  })();

  let userMenu = document.querySelector(".user-header__menu");
  let userIcon = document.querySelector('.user-header__icon');
  userIcon.addEventListener('click', function (e) {
    userMenu.classList.toggle('_active');
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.user-header')) {
      let userMenu = document.querySelector(".user-header__menu");
      userMenu.classList.remove('_active');
    }
  });
  var sliders = document.querySelectorAll('._swiper');

  if (sliders) {
    for (var _index24 = 0; _index24 < sliders.length; _index24++) {
      var slider = sliders[_index24];

      if (!slider.classList.contains('swiper-bild')) {
        var slider_items = slider.children;

        if (slider_items) {
          for (var _index25 = 0; _index25 < slider_items.length; _index25++) {
            var _el12 = slider_items[_index25];

            _el12.classList.add('swiper-slide');
          }
        }

        var slider_content = slider.innerHTML;
        var slider_wrapper = document.createElement('div');
        slider_wrapper.classList.add('swiper-wrapper');
        slider_wrapper.innerHTML = slider_content;
        slider.innerHTML = '';
        slider.appendChild(slider_wrapper);
        slider.classList.add('swiper-bild');
      }

      if (slider.classList.contains('_gallery')) {//slider.data('lightGallery').destroy(true);
      }
    }

    sliders_bild_callback();
  }

  function sliders_bild_callback(params) {}

  var main_slider = new Swiper('.main-slider__body', {
    /*
    effect: 'fade',
    autoplay: {
    	  delay: 3000,
    	  disableOnInteraction: false,
    },
    */
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    ///autoHeight: true,
    speed: 800,
    //touchRatio: 0,
    //simulateTouch: false,
    loop: true,
    //preloadImages: false,
    //lazy: true,
    // Dotts
    //pagination: {
    //	el: '.slider-quality__pagging',
    //	clickable: true,
    //},
    // Arrows
    navigation: {
      nextEl: '.control-main-slider__arrow_next',
      prevEl: '.control-main-slider__arrow_prev'
    },
    breakpoints: {
      320: {
        autoHeight: true
      },
      768: {
        autoHeight: false
      }
    },
    on: {
      lazyImageReady: function lazyImageReady() {
        ibg();
      }
    } // And if we need scrollbar
    //scrollbar: {
    //	el: '.swiper-scrollbar',
    //},

  });
  var lots_slider = new Swiper('.slider-lots__body', {
    /*
    effect: 'fade',
    autoplay: {
    	  delay: 3000,
    	  disableOnInteraction: false,
    },
    */
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 0,
    ///autoHeight: true,
    speed: 800,
    //touchRatio: 0,
    //simulateTouch: false,
    loop: true,
    //preloadImages: false,
    //lazy: true,
    // Dotts
    //pagination: {
    //	el: '.slider-quality__pagging',
    //	clickable: true,
    //},
    // Arrows
    navigation: {
      nextEl: '.control-slider-lots__arrow_next',
      prevEl: '.control-slider-lots__arrow_prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      552: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      }
    },
    on: {
      lazyImageReady: function lazyImageReady() {
        ibg();
      }
    } // And if we need scrollbar
    //scrollbar: {
    //	el: '.swiper-scrollbar',
    //},

  });
  var quotes_slider = new Swiper('.slider-quotes__body', {
    effect: 'fade',

    /*
    autoplay: {
    	  delay: 3000,
    	  disableOnInteraction: false,
    },
    */
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    ///autoHeight: true,
    speed: 800,
    //touchRatio: 0,
    //simulateTouch: false,
    loop: true,
    //preloadImages: false,
    //lazy: true,
    // Dotts
    //pagination: {
    //	el: '.slider-quality__pagging',
    //	clickable: true,
    //},
    // Arrows
    navigation: {
      nextEl: '.control-slider-quotes__circle'
    },
    breakpoints: {
      320: {
        autoHeight: true
      },
      570: {
        autoHeight: false
      }
    },
    on: {
      lazyImageReady: function lazyImageReady() {
        ibg();
      }
    } // And if we need scrollbar
    //scrollbar: {
    //	el: '.swiper-scrollbar',
    //},

  });
  var scr_body = document.querySelector('body');
  var scr_blocks = document.querySelectorAll('._scr-sector');
  var scr_items = document.querySelectorAll('._scr-item');
  var scr_min_height = 750; //ScrollOnScroll

  window.addEventListener('scroll', scroll_scroll);

  function scroll_scroll() {
    scr_body.setAttribute('data-scroll', pageYOffset);
    var hrader = document.querySelector('header.header');
    scr_body.setAttribute('data-scroll', pageYOffset);

    if (pageYOffset > 10) {
      hrader.classList.add('_scroll');
    } else {
      hrader.classList.remove('_scroll');
    }

    if (scr_blocks.length > 0) {
      for (var _index26 = 0; _index26 < scr_blocks.length; _index26++) {
        var block = scr_blocks[_index26];
        var block_offset = offset(block).top;
        var block_height = block.offsetHeight;

        if (pageYOffset > block_offset - window.innerHeight / 1.5 && pageYOffset < block_offset + block_height - window.innerHeight / 1.5) {
          block.classList.add('_scr-sector_active');
        } else {
          if (block.classList.contains('_scr-sector_active')) {
            block.classList.remove('_scr-sector_active');
          }
        }

        if (pageYOffset > block_offset - window.innerHeight / 2 && pageYOffset < block_offset + block_height - window.innerHeight / 2) {
          if (!block.classList.contains('_scr-sector_current')) {
            block.classList.add('_scr-sector_current');
          }
        } else {
          if (block.classList.contains('_scr-sector_current')) {
            block.classList.remove('_scr-sector_current');
          }
        }
      }
    }

    if (scr_items.length > 0) {
      for (var _index27 = 0; _index27 < scr_items.length; _index27++) {
        var scr_item = scr_items[_index27];
        var scr_item_offset = offset(scr_item).top;
        var scr_item_height = scr_item.offsetHeight;

        if (pageYOffset > scr_item_offset - window.innerHeight / 1.5 && pageYOffset < scr_item_offset + scr_item_height - window.innerHeight / 1.5) {
          scr_item.classList.add('_active');
          scroll_load_item(scr_item);
        } else {
          scr_item.classList.remove('_active');
        }
      }
    }
  }

  setTimeout(function () {
    scroll_scroll();
  }, 100);

  function scroll_load_item(scr_item) {
    if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
      var map_item = document.getElementById('map');

      if (map_item) {
        scr_item.classList.add('_loaded-map');
        map();
      }
    }
  }

  var link = document.querySelectorAll('._goto-block');

  if (link) {
    var blocks = [];

    var _loop7 = function _loop7(_index28) {
      var el = link[_index28];
      var block_name = el.getAttribute('href').replace('#', '');

      if (block_name != '' && !~blocks.indexOf(block_name)) {
        blocks.push(block_name);
      }

      el.addEventListener('click', function (e) {
        if (document.querySelector('.menu__body._active')) {
          menu_close();
          body_lock_remove(500);
        }

        var target_block_class = el.getAttribute('href').replace('#', '');
        var target_block = document.querySelector('.' + target_block_class);

        _goto(target_block, 300);

        e.preventDefault();
      });
    };

    for (var _index28 = 0; _index28 < link.length; _index28++) {
      _loop7(_index28);
    }

    window.addEventListener('scroll', function (el) {
      var old_current_link = document.querySelectorAll('._goto-block._active');

      if (old_current_link) {
        for (var _index29 = 0; _index29 < old_current_link.length; _index29++) {
          var _el13 = old_current_link[_index29];

          _el13.classList.remove('_active');
        }
      }

      for (var _index30 = 0; _index30 < blocks.length; _index30++) {
        var block = blocks[_index30];
        var block_item = document.querySelector('.' + block);

        if (block_item) {
          var block_offset = offset(block_item).top;
          var block_height = block_item.offsetHeight;

          if (pageYOffset > block_offset - window.innerHeight / 3 && pageYOffset < block_offset + block_height - window.innerHeight / 3) {
            var current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');

            for (var _index31 = 0; _index31 < current_links.length; _index31++) {
              var current_link = current_links[_index31];
              current_link.classList.add('_active');
            }
          }
        }
      }
    });
  } //ScrollOnClick (Simple)


  var goto_links = document.querySelectorAll('._goto');

  if (goto_links) {
    var _loop8 = function _loop8(_index32) {
      var goto_link = goto_links[_index32];
      goto_link.addEventListener('click', function (e) {
        var target_block_class = goto_link.getAttribute('href').replace('#', '');
        var target_block = document.querySelector('.' + target_block_class);

        _goto(target_block, 300);

        e.preventDefault();
      });
    };

    for (var _index32 = 0; _index32 < goto_links.length; _index32++) {
      _loop8(_index32);
    }
  }

  function _goto(target_block, speed) {
    var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var header = ''; //OffsetHeader

    header = 'header';
    var options = {
      speedAsDuration: true,
      speed: speed,
      header: header,
      offset: offset
    };
    var scr = new SmoothScroll();
    scr.animateScroll(target_block, '', options);
  } //SameFunctions


  function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }

  function disableScroll() {
    if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
    document.addEventListener('wheel', preventDefault, {
      passive: false
    }); // Disable scrolling in Chrome

    window.onwheel = preventDefault; // modern standard

    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE

    window.ontouchmove = preventDefault; // mobile

    document.onkeydown = preventDefaultForScrollKeys;
  }

  function enableScroll() {
    if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', preventDefault, false);
    document.removeEventListener('wheel', preventDefault, {
      passive: false
    }); // Enable scrolling in Chrome

    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  }

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }

  function preventDefaultForScrollKeys(e) {
    /*if (keys[e.keyCode]) {
    	  preventDefault(e);
    	  return false;
    }*/
  }
});