import 'bootstrap';
import './styles/main.scss';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'magnific-popup';
import './assets/js/main.js';

// init fontawesome
library.add(fas);
dom.watch(); // Kicks off the process of finding <i> tags and replacing with <svg>


// var i18n = require("i18next");
// var resBundle = require(
//     "i18next-resource-store-loader!./assets/i18n/index.js"
// );

// i18n.init({
//     lng: 'en',
//     resources: resBundle
// });


// Initial Navigo
var root = null;
var useHash = false; // Defaults to: false
var hash = '#!'; // Defaults to: '#'

const
    Navigo = require('navigo'),
    router = new Navigo(root = null, useHash=false);

window.router = router;

var htmlFrags = {
    index:    require("./html/fragments/index.html"),
    services: require("./html/fragments/services.html"),
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
                $("#main").append(htmlFrags.index);
            },
            '/services': function () {
                console.log("Services");
                $("#main").append(htmlFrags.services);
            },
            '/solutions': function () {
                console.log("solutions");
                $("#main").append(htmlFrags.index);
            }
            ,
            '/solutions': function () {
                console.log("solutions");
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