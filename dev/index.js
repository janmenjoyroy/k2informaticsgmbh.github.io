import 'bootstrap';
import './styles/main.scss';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'magnific-popup';
import './assets/js/main.js';

/* For Language */
window.lang = "en";

// init fontawesome
library.add(fas);
dom.watch(); // Kicks off the process of finding <i> tags and replacing with <svg>

// Initial Navigo
var root = null;
var useHash = false; // Defaults to: false
var hash = '#!'; // Defaults to: '#'

const
    Navigo = require('navigo'),
    router = new Navigo(root = null, useHash = true);

window.router = router;

var htmlFrags = {
    index: require("./html/fragments/index.html"),
    services: require("./html/fragments/services.html"),
    solutions: require("./html/fragments/solutions.html"),
    about_us: require("./html/fragments/about_us.html")
};



function loadHeader() {
    let headerElem = '<meta charset="utf-8">';
    headerElem = `${headerElem} <meta content="width=device-width, initial-scale=1.0" name="viewport">`;
    headerElem = `${headerElem} <meta content="" name="keywords">`;
    headerElem = `${headerElem} <meta content="" name="description">`;
    return headerElem;
}


$(function () {
    $(document.head).append(loadHeader());
    router
        .on({
            '/': function () {
                console.log("Home");
                $("#main").empty().append(htmlFrags.index);
                i18next.changeLanguage(window.lang);
                jqueryI18next.init(i18next, $);
                $('body').localize();
            },
            '/:lang?/home': function (prams) {
                console.log(prams);
                window.lang = prams.lang;
                console.log("Home");
                $("#main").empty().append(htmlFrags.index);
                i18next.changeLanguage(window.lang);
                jqueryI18next.init(i18next, $);
                $('body').localize();
            },
            '/:lang?/services': function (prams) {
                window.lang = prams.lang;
                console.log("Services");
                $("#main").empty().append(htmlFrags.services);
                i18next.changeLanguage(window.lang);
                jqueryI18next.init(i18next, $);
                $('body').localize();
            },
            '/:lang?/solutions': function (prams) {
                window.lang = prams.lang;
                console.log("Solutions");
                $("#main").empty().append(htmlFrags.solutions);
                i18next.changeLanguage(window.lang);
                jqueryI18next.init(i18next, $);
                $('body').localize();
            }
            ,
            '/:lang?/about_us': function (prams) {
                window.lang = prams.lang;
                console.log("Companies");
                $("#main").empty().append(htmlFrags.about_us);
                i18next.changeLanguage(window.lang);
                jqueryI18next.init(i18next, $);
                $('body').localize();
            }
        })
        .resolve();
    router.updatePageLinks();
    console.log(process.env.NODE_ENV);
});

function open_url_tab(url) {
    var win = window.open(url, '_blank');
    if (win) { // Browser has allowed it to be opened
        win.focus();
    } else { // Browser has blocked it
        alert('Please allow popups for this website');
    }
}