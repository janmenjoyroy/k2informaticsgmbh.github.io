import "bootstrap";
import "./styles/main.scss";
import {
  library,
  dom
} from "@fortawesome/fontawesome-svg-core";
import {
  fas
} from "@fortawesome/free-solid-svg-icons";
import "./js/main.js";

/* For Language */
window.lang = "en";

// init fontawesome
library.add(fas);
dom.watch(); // Kicks off the process of finding <i> tags and replacing with <svg>

// Initial Navigo
var root = null;
var useHash = false; // Defaults to: false
var hash = "#!"; // Defaults to: '#'

const Navigo = require("navigo"),
  router = new Navigo((root = null), (useHash = true));

window.router = router;

var htmlFrags = {
  index: require("./html/fragments/index.html"),
  services: require("./html/fragments/services.html"),
  solutions: require("./html/fragments/solutions.html"),
  about_us: require("./html/fragments/about_us.html")
};

function loadHeader() {
  let headerElem = [];
  headerElem.push(
    $("<meta/>").attr({
      "charset": "utf-8"
    })
  );
  headerElem.push(
    $("<meta/>").attr({
      "content": "width=device-width, initial-scale=1.0",
      "name": "viewport"
    })
  );
  headerElem.push(
    $("<meta/>").attr({
      "content": "",
      "name": "keywords"
    })
  );
  headerElem.push(
    $("<meta/>").attr({
      "content": "",
      "name": "description"
    })
  );
  return headerElem;
}

$(function () {
  $(document.head).append(loadHeader());
  router
    .on({
      "/": function () {
        console.log("Home");
        $("#main")
          .empty()
          .append(htmlFrags.index);
        i18next.changeLanguage(window.lang);
        jqueryI18next.init(i18next, $);
        $("body").localize();
      },
      "/:lang?/home": function (prams) {
        console.log(prams);
        window.lang = prams.lang;
        console.log("Home");
        $("#main")
          .empty()
          .append(htmlFrags.index);
        i18next.changeLanguage(window.lang);
        jqueryI18next.init(i18next, $);
        $("body").localize();
      },
      "/:lang?/services": function (prams) {
        window.lang = prams.lang;
        console.log("Services");
        $("#main")
          .empty()
          .append(htmlFrags.services);
        i18next.changeLanguage(window.lang);
        jqueryI18next.init(i18next, $);
        $("body").localize();
      },
      "/:lang?/solutions": function (prams) {
        window.lang = prams.lang;
        console.log("Solutions");
        $("#main")
          .empty()
          .append(htmlFrags.solutions);
        i18next.changeLanguage(window.lang);
        jqueryI18next.init(i18next, $);
        $("body").localize();
      },
      "/:lang?/about_us": function (prams) {
        window.lang = prams.lang;
        console.log("Companies");
        $("#main")
          .empty()
          .append(htmlFrags.about_us);
        initAboutUs();
        i18next.changeLanguage(window.lang);
        jqueryI18next.init(i18next, $);
        $("body").localize();
      }
    })
    .resolve();
  router.updatePageLinks();
  console.log(process.env.NODE_ENV);
});

function open_url_tab(url) {
  var win = window.open(url, "_blank");
  if (win) {
    // Browser has allowed it to be opened
    win.focus();
  } else {
    // Browser has blocked it
    alert("Please allow popups for this website");
  }
}

function initAboutUs() {
  /* Strat vision section */
  for (let i = 0; i < 7; i++) {
    if (i === 1) {
      let ulElem = $("<ul/>");
      for (let j = 0; j < 5; j++) {
        let li = $("<li/>");
        let icon = $("<i/>").addClass("fas fa-angle-double-right");
        let span = $("<span/>").attr({
          "data-i18n": `[html]about_us.vision.contents.${i}.${j}`
        });
        li.append(icon);
        li.append("&nbsp;");
        li.append(span);
        ulElem.append(li);
      }
      $("#visionList").append(ulElem);
    } else if (i === 5) {
      let ulElem = $("<ul/>");
      for (let j = 0; j < 5; j++) {
        let li = $("<li/>");
        let icon = $("<i/>").addClass("fas fa-angle-double-right");
        let span = $("<span/>").attr({
          "data-i18n": `[html]about_us.vision.contents.${i}.${j}`
        });
        li.append(icon);
        li.append("&nbsp;");
        li.append(span);
        ulElem.append(li);
      }
      $("#visionList").append(ulElem);
    } else {
      $("#visionList").append(
        "<p data-i18n='[html]about_us.vision.contents." + i + "'></p>"
      );
    }
  }
  /* End vision section */

  /* Strat team section */
  for (let i = 0; i < 14; i++) {
    let outerDiv = $("<div/>")
      .addClass("col-lg-2 col-md-6")
      .attr({
        "data-i18n": "[data-content]about_us.teams.list." + i + ".content"
      });
    let innerDiv1 = $("<div/>").addClass("member");
    let innerDiv2 = $("<div/>").addClass("pic");
    let img = $("<img/>")
      .attr({
        src: "../../assets/team/portrait_" + i + ".jpg"
      })
      .css({width: "100px", height: "100px"});
    innerDiv2.append(img);
    innerDiv1.append(innerDiv2);
    innerDiv1.append(
      '<h5 style="font-size:16px" data-i18n="[html]about_us.teams.list.' +
      i +
      '.name"></h5>'
    );
    innerDiv1.append(
      '<span data-i18n="[html]about_us.teams.list.' + i + '.type"></span>'
    );
    outerDiv.append(innerDiv1);
    $("#teamList").append(outerDiv);
  }
  /* End team section */

  /* Strat contact section */
  let table = $("<table />").addClass("table table-sm table-bordered");
  let tbody = $("<tbody />");
  for (let i = 0; i < 8; i++) {
    let tr = $("<tr />");
    /* For First Row */
    let td1 = $("<td />")
      .css({width: "30%", height: "40px"})
      .addClass("text-center align-middle")
      .attr({
        "data-i18n": "[html]about_us.contact.contents." + i + ".key"
      });
    tr.append(td1);
    /* For Second Row */
    let td2 = $("<td />")
      .css({height: "40px"})
      .addClass("align-middle")
      .attr({
        "data-i18n": "[html]about_us.contact.contents." + i + ".value"
      });
    tr.append(td2);

    tbody.append(tr);
  }
  table.append(tbody);
  $("#contactList").append(table);
  /* End Contact section */

  /* Strat support section */
  for (let i = 0; i < 4; i++) {
    $("#supportContents").append(
      '<span data-i18n="[html]about_us.support.contents.' + i + '"></span><br/>'
    );
  }
  /* End support section */

  /* Strat jobs Section */
  for (let i = 0; i < 12; i++) {
    if (i === 5) {
      let ulElem = $("<ul />");
      for (let j = 0; j < 5; j++) {
        let li = $("<li />");
        li.append(
          "<i class='fas fa-angle-double-right'></i>&nbsp;<span data-i18n='[html]about_us.jobs.contents." +
          i +
          "." +
          j +
          "'></span>"
        );
        ulElem.append(li);
      }
      $("#jobContents").append(ulElem);
    } else if (i === 8) {
      let ulElem = $("<ul />");
      for (let j = 0; j < 11; j++) {
        let li = $("<li />");
        li.append(
          "<i class='fas fa-angle-double-right'></i>&nbsp;<span data-i18n='[html]about_us.jobs.contents." +
          i +
          "." +
          j +
          "'></span>"
        );
        ulElem.append(li);
      }
      $("#jobContents").append(ulElem);
    } else if (i === 10) {
      let ulElem = $("<ul />");
      for (let j = 0; j < 5; j++) {
        let li = $("<li />");
        li.append(
          "<i class='fas fa-angle-double-right'></i>&nbsp;<span data-i18n='[html]about_us.jobs.contents." +
          i +
          "." +
          j +
          "'></span>"
        );
        ulElem.append(li);
      }
      $("#jobContents").append(ulElem);
    } else {
      $("#jobContents").append(
        "<p data-i18n='[html]about_us.jobs.contents." + i + "'></p>"
      );
    }
  }
  /* End jobs section */
}