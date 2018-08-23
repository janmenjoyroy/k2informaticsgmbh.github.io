import 'bootstrap';
import './styles/main.scss';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// init fontawesome
library.add(fas);
dom.watch(); // Kicks off the process of finding <i> tags and replacing with <svg>

const
    Navigo = require('navigo'),
    router = new Navigo(window.location.origin);

window.router = router;

var htmlFrags = {
	index: require("./html/fragments/index.html")
};

$(function () {
    //trimHtmlFragments();

	$(document.head).append('<meta name="viewport" content="width=device-width, initial-scale=1">');
    $(document.body).html(htmlFrags.index);
    //loadDialogs();
    router
        .on({
            '*': function () {
                console.log("home");
                $('#main').html(htmlFrags.home);
            },
            '/about': function () {
                console.log("about");
                open_url_tab("http://some.external.url");
            },
            '/menu1': function () {
                console.log("home");
                $('#main').html(htmlFrags.menu1);
            }
        })
        .resolve();
    router.updatePageLinks();
    console.log(process.env.NODE_ENV);
});

/*
function loadHtmlFragments() {
    console.log("loading html fragments...");
    htmlFrags.index = $.trim(require("./html/fragments/index.html"));
    htmlFrags.home = $.trim(require("./html/home.html"));

    // dialogs
    htmlFrags.dialogs = {};
    htmlFrags.dialogs.signin = $.trim(require("./html/dialogs/signin.html"));
}

/*
function loadDialogs() {
    console.log("loading dialog fragments...");
    for (var dlg in htmlFrags.dialogs) {
        $('#dialogs').append(htmlFrags.dialogs[dlg]);
    }
}
*/

function open_url_tab(url) {
    var win = window.open(url, '_blank');
    if (win) { // Browser has allowed it to be opened
        win.focus();
    } else { // Browser has blocked it
        alert('Please allow popups for this website');
    }
}