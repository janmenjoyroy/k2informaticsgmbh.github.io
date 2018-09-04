/*
 ******** For Css Part ********
*/
import 'bootstrap';
import './assets/bootstrap/css/bootstrap.css';
import './assets/font-awesome/css/font-awesome.min.css';
import './assets/ionicons/css/ionicons.min.css';
import './assets/css/style.css';



/*
 ******** For JS Part ********
*/
import './assets/bootstrap/js/bootstrap.bundle.min.js';
import './assets/magnific-popup/magnific-popup.min.js';
import './assets/js/main.js';

//import { library, dom } from '@fortawesome/fontawesome-svg-core';
//import { fas } from '@fortawesome/free-solid-svg-icons';

// init fontawesome
//library.add(fas);
//dom.watch(); // Kicks off the process of finding <i> tags and replacing with <svg>


// Initial Navigo
var root = null;
var useHash = false; // Defaults to: false
var hash = '#!'; // Defaults to: '#'

const
    Navigo = require('navigo'),
    router = new Navigo(root, useHash, hash);

window.router = router;

var htmlFrags = {
    // index: require("html-loader!./html/fragments/index.html")
    index: require("./html/fragments/index.html")
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
    //$(document.body).append(htmlFrags.index);
    router
        .on({
            '/': function () {
                console.log("home");
            },
            '/about': function () {
                console.log("about");
            },
            '/menu1': function () {
                console.log("home");
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