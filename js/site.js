function getBrowserInfo() {　　
    var Sys = {};　　
    var ua = navigator.userAgent.toLowerCase();　　
    var s;

    s = ua.match(/msie ([\d.]+)/);
    if (s) { Sys.ie = s[1].match(/\d+/g)[0]; }
    s = ua.match(/rv:([\d.]+)\) like gecko/i);
    if (s) { Sys.ie = s[1].match(/\d+/g)[0]; }
    s = ua.match(/firefox\/([\d.]+)/);
    if (s) { Sys.firefox = s[1].match(/\d+/g)[0]; }
    s = ua.match(/chrome\/([\d.]+)/);
    if (s) { Sys.chrome = s[1].match(/\d+/g)[0]; }
    s = ua.match(/opera.([\d.]+)/);
    if (s) { Sys.opera = s[1].match(/\d+/g)[0]; }
    s = ua.match(/opr.([\d.]+)/);
    if (s) { Sys.opera = s[1].match(/\d+/g)[0]; }
    s = ua.match(/version\/([\d.]+).*safari/);
    if (s) { Sys.safari = s[1].match(/\d+/g)[0]; }
    /*   s = ua.match(/edge\/([\d.]+)/);
         if (s) { Sys.edge = s[1].match(/\d+/g)[0]; }*/
    //alert(ua);
    Sys.isiOS = !!ua.match(/\(i[^;]+;( u;)? cpu.+mac os x/);
    Sys.isAndroid = ua.indexOf('android') > -1 || ua.indexOf('adr') > -1;　　
    if (Sys.isAndroid) {
        t = (ua.match(/android ([\d.]+)/))[1].match(/\d+/g);
        Sys.android = Number(t[0]) + Number(t[1]) / 10;
    }
    Sys.new_enought = !!(Sys.ie >= 11 || Sys.firefox >= 35 || Sys.chrome >= 43 || Sys.opera >= 30 || Sys.safari >= 9 || Sys.android >= 4.4);
    return Sys;
}
var bsSys = getBrowserInfo();
//alert(JSON.stringify(bsSys));






if (bsSys.isiOS || bsSys.isAndroid || bsSys.ie || !bsSys.new_enought) {
    $('.full-fixed-bg').css('background-attachment', 'scroll');
}
if (!bsSys.new_enought) {
    $(".old-browser-warning").css("display", "block");
}


var ifnav1dc = false;

function decidenavcolor() {
    if (!ifnav1dc) {
        $(".navbar").offset() && $(".navbar").offset().top > 75 ? $(".scrolling-navbar2").addClass("top-nav-collapse") : $(".scrolling-navbar2").removeClass("top-nav-collapse");
    }
}
$(window).on(function() {
    decidenavcolor();

});
$(window).scroll(function() {
    decidenavcolor();
});
$('#navbarNav1').on('show.bs.collapse', function() {
    ifnav1dc = true;
    $('.navbar').addClass("top-nav-collapse");
    $('.navbar').css('padding-bottom', '1rem');
});
$('#navbarNav1').on('hide.bs.collapse', function() {
    ifnav1dc = false;
    $('.navbar').css('padding-bottom', '0.5rem');
    decidenavcolor();
});


//fix bug in mdb.js and add wow-together (IE11 support)
WOW.prototype._startWow = function() {

    if (this._live) {
        this._checkForChanges();
    }
    if (window.pageYOffset || document.documentElement.scrollTop === 0 && this._seoFixEnabled) {
        this._seoFix();
    }

    this._appearInView();

    this._scrollHandler();

};
WOW.prototype._isInView = function(box) {

    var offset = box.getAttribute('data-wow-offset') || this._offset;
    var boxTopOffset = this._getElementOffset(box);

    var triggerOffset = boxTopOffset + ~~offset;
    if ($(box).hasClass("wow-together")) {
        //alert($(box).position().top);
        triggerOffset -= $(box).position().top;
    }

    var bottomPosition = window.innerHeight + (window.pageYOffset || document.documentElement.scrollTop);

    return triggerOffset <= bottomPosition && (triggerOffset === 0 ? 10 : triggerOffset) >= (window.pageYOffset || document.documentElement.scrollTop);

};