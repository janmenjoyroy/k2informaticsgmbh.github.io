$(function () {
  // i18next for multilingual
  i18next.use(i18nextXHRBackend);
  i18next.init({
    'debug': true,
    'fallbackLng': window.lang,
    backend: {
      loadPath: 'translations/{{lng}}.json'
    }
  }, function () {
    jqueryI18next.init(i18next, $);
    $('body').localize();
  });

  $(document).on("click", ".lang", function (event) {
    event.stopPropagation();
    event.preventDefault();
    window.lang = $(this).attr("data-lang");
    i18next.changeLanguage(window.lang);
    let url = window.location.href;
    url = url.split("/").pop();
    console.log("url:", url);
    router.pause();
    router.navigate(`/${lang}/${url}`);
    router.resume();
  });
  i18next.on('languageChanged', () => {
    jqueryI18next.init(i18next, $);
    $('body').localize();
  });

  function loadPage(page) {
    window.router.navigate(`/${window.lang}/${page}`);
    window.scrollTo(0, 0);
  }

  // change navigate router
  $(document).on("click", "#nav-menu-container li a", function (event) {
    event.stopPropagation();
    event.preventDefault();
    loadPage($(this).attr("data-page"));
  });

  $(document).on("click", "#mobile-nav li a", function (event) {
    event.stopPropagation();
    event.preventDefault();
    loadPage($(this).attr("data-page"));
    $("#mobile-nav-toggle").trigger("click");
  });

  $(document).on("click", ".footer-links a", function (event) {
    event.stopPropagation();
    event.preventDefault();
    loadPage($(this).attr("data-page"));
  });

  $("#main").on("click", ".description a", function (event) {
    event.stopPropagation();
    event.preventDefault();
    loadPage($(this).attr("data-page"));
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="toggle-bars fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      var icon = $('.toggle-bars');
      var icon_fa_icon = icon.attr('data-icon');
      if (icon_fa_icon === "times") {
        icon.attr('data-icon', 'bars');
      } else {
        icon.attr('data-icon', 'times');
      }
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          var icon = $('.toggle-bars');
          var icon_fa_icon = icon.attr('data-icon');
          if (icon_fa_icon === "times") {
            icon.attr('data-icon', 'bars');
          } else {
            icon.attr('data-icon', 'times');
          }
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

});