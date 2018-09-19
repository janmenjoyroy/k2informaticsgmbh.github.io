
$(document).ready(function ($) {

  // i18next for multilingual
  // i18next.use(i18nextXHRBackend);
  // i18next.init({
  //   'debug': true,
  //   'lng': 'en',
  //   'fallbackLng': 'en',
  //   backend: {
  //     loadPath: 'locales/{{lng}}/{{ns}}.json'
  //   }
  // }, function () {
  //   jqueryI18next.init(i18next, $);
  //   $('body').localize();
  // });


  i18next.init({
    'debug': true,
    'lng': 'en',
    'fallbackLng': 'en',
    resources: {
      en: {
        translation: {
          "menu": {
            "home": "Home",
            "services": "Services",
            "solutions": "Solutions",
            "companies": "Companies",
            "moreText": "More"
          },
          "home": {
            "headline": "Welcome to K2 Informatics GmbH",
            "content": "You will find some information about us here. We will be happy to explain you in concrete terms what we can do for you. <a href=''>Call us</a> or send us an <a href=''>email</a>.",
            "paragraph": "<li><i class='fas fa-angle-double-right'></i>&nbsp;  Wanted: experienced Erlang programmer.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Wanted: experienced Erlang developer.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Knowledge Square.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Building up knowledge.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Gain information.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Process data.</li>",
            "serviceSmallText": "Quickly and conveniently solved an IT problem...",
            "solutionSmallText": "The secure handling of data is the basis for any information...",
            "companiesSmallText": "The market and your business is changing faster and faster..."
          },
          "services": {
            "headline": "Services",
            "content": "Then we would like to do our part, either as an advisor or as we implement a solution for you and, if you wish, we can also do it for you.",
            "paragraph": "<li><i class='fas fa-angle-double-right'></i>&nbsp;  Wanted: experienced Erlang programmer.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Wanted: experienced Erlang developer.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Knowledge Square.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Building up knowledge.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Gain information.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Process data.</li>",
            "serviceSmallText": "Quickly and conveniently solved an IT problem...",
            "solutionSmallText": "The secure handling of data is the basis for any information...",
            "companiesSmallText": "The market and your business is changing faster and faster..."
          }
        }
      }
      ,
      de: {
        translation: {
          "menu": {
            "home": "Zuhause",
            "services": "Dienstleistungen",
            "solutions": "Lösungen",
            "companies": "Unternehmen",
            "moreText": "Mehr"
          },
          "home": {
            "headline": "Willkommen bei K2 Informatics GmbH",
            "content": "Sie finden hier einige Informationen über uns. Was wir konkret für Sie tun können, erläutern wir Ihnen gerne im persönlichen Gespräch. <a href=''>Rufen Sie uns an</a>, oder senden Sie uns eine <a href=''>Mail.</a>",
            "paragraph": "<li><i class='fas fa-angle-double-right'></i>&nbsp;  Gesucht: erfahrener Erlang-Programmierer.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Wanted: experienced Erlang Developer.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Knowledge Square.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Wissen aufbauen.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Informationen gewinnen.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Daten verarbeiten.</li>",
            "serviceSmallText": "Rasch und bequem ein IT-Problem gelöst haben...",
            "solutionSmallText": "Der sichere Umgang mit Daten ist die Basis für jedes Information...",
            "companiesSmallText": "Der Markt und Ihr Business wandelt sich immer schneller..."
          },
          "services": {
            "headline": "Dienstleistungen",
            "content": "Then we would like to do our part, either as an advisor or as we implement a solution for you and, if you wish, we can also do it for you.",
            "paragraph": "<li><i class='fas fa-angle-double-right'></i>&nbsp;  Wanted: experienced Erlang programmer.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Wanted: experienced Erlang developer.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Knowledge Square.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Building up knowledge.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Gain information.</li><li><i class='fas fa-angle-double-right'></i>&nbsp;  Process data.</li>",
            "serviceSmallText": "Quickly and conveniently solved an IT problem...",
            "solutionSmallText": "The secure handling of data is the basis for any information...",
            "companiesSmallText": "The market and your business is changing faster and faster..."
          }
        }
      }
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

  // change navigate router
  $(".nav-menu li a").on("click", function (event) {
    event.stopPropagation();
    event.preventDefault();
    let page = $(this).attr("data-page");
    window.router.navigate(`/${page}`);
  });

  
  $("#main").on("click",".description a",function (event) {
    event.stopPropagation();
    event.preventDefault();
    let page = $(this).attr("data-page");
    window.router.navigate(`/${page}`);
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
