//https://stackoverflow.com/a/9851769

var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
var isBlink = (isChrome || isOpera) && !!window.CSS;

export function checkBrowser() {
    return {
            "Firefox": isFirefox,
            "Safari": isSafari,
            "Internet Explorer": isIE,
            "Edge": isEdge,
            "Chrome": isChrome,
            "Opera": isOpera,
            "Blink": isBlink,
            "Edge Chromium": isEdgeChromium
            };
}

export function currentBrowser() {

    var browserList = checkBrowser();
    for (let browser in browserList) {
        if (browserList[browser]==true) {return browser;};
    };
}

