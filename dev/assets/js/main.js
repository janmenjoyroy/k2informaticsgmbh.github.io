function changeRouter(page) {
  window.router.navigate(`/${page}`);
}

$(document).ready(function ($) {

  // i18next for multilingual
  i18next.use(i18nextXHRBackend);
  i18next.init({
    'debug': true,
    'lng': 'en',
    'fallbackLng': 'en',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  }, function () {
      jqueryI18next.init(i18next, $);
      $('body').localize();
  });

  $(".lang").on("click", function (event) {
      event.stopPropagation();
      event.preventDefault();
      let lang = $(this).attr("data-lang");
      i18next.changeLanguage(lang);
  });
  i18next.on('languageChanged', () => {
      jqueryI18next.init(i18next, $);
      $('body').localize();
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
