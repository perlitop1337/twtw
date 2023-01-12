var _0x377c2f = _0x5927;
(function (_0x5680f8, _0x433ac5) {
    var _0x14eb60 = _0x5927;
    var _0x556234 = _0x5680f8();
    while (!![]) {
        try {
            var _0x4dd9ff = parseInt(_0x14eb60(0x211)) / 0x1 * (parseInt(_0x14eb60(0x1dc)) / 0x2) + -parseInt(_0x14eb60(0x180)) / 0x3 + parseInt(_0x14eb60(0x20c)) / 0x4 * (parseInt(_0x14eb60(0x1d0)) / 0x5) + -parseInt(_0x14eb60(0x16c)) / 0x6 + -parseInt(_0x14eb60(0x209)) / 0x7 * (parseInt(_0x14eb60(0x1fa)) / 0x8) + parseInt(_0x14eb60(0x231)) / 0x9 + parseInt(_0x14eb60(0x232)) / 0xa;
            if (_0x4dd9ff === _0x433ac5) {
                break;
            } else {
                _0x556234['push'](_0x556234['shift']());
            }
        } catch (_0x248430) {
            _0x556234['push'](_0x556234['shift']());
        }
    }
}(_0x244d, 0xefc90));
var zmass = window[_0x377c2f(0x233)][_0x377c2f(0x19f)](_0x377c2f(0x222));
var xx = window[_0x377c2f(0x233)][_0x377c2f(0x19f)]('xx');
var nr_wioski = window[_0x377c2f(0x233)]['getItem'](_0x377c2f(0x224));
var nr_wsi = window[_0x377c2f(0x233)][_0x377c2f(0x19f)]('wezwij');
var nr_grupy = window['localStorage'][_0x377c2f(0x19f)]('wezwij1');
var gui_content;
var styl;
function _0x5927(_0x37eedd, _0x13ff46) {
    var _0x244d02 = _0x244d();
    _0x5927 = function (_0x5927e3, _0x39ee4d) {
        _0x5927e3 = _0x5927e3 - 0x16c;
        var _0x279cbf = _0x244d02[_0x5927e3];
        return _0x279cbf;
    };
    return _0x5927(_0x37eedd, _0x13ff46);
}
var start = window[_0x377c2f(0x233)][_0x377c2f(0x19f)]('zb');
var narcyz = window[_0x377c2f(0x233)][_0x377c2f(0x19f)](_0x377c2f(0x192));
var mimi = window[_0x377c2f(0x233)][_0x377c2f(0x19f)]('zb2');
var tymek = window[_0x377c2f(0x233)]['getItem'](_0x377c2f(0x20d));
var aneta = window[_0x377c2f(0x233)]['getItem'](_0x377c2f(0x20b));
var tatanatana = window[_0x377c2f(0x233)][_0x377c2f(0x19f)](_0x377c2f(0x1b2));
var template = window['localStorage']['getItem']('zb7');
var ranking = window['localStorage']['getItem']('zb8');
var budy = window[_0x377c2f(0x233)][_0x377c2f(0x19f)]('zb9');
var kliny = window[_0x377c2f(0x233)][_0x377c2f(0x19f)](_0x377c2f(0x191));
var warzywniak = window['localStorage']['getItem']('zb11');
var deff1 = window['localStorage'][_0x377c2f(0x19f)](_0x377c2f(0x1b0));
var url = document[_0x377c2f(0x176)]['toString']();
var heavyPop = 0x4;
var premiumBtnEnabled = ![];
var gui_content_menu;
var swiat = url[_0x377c2f(0x230)](url[_0x377c2f(0x1f4)]('=') + 0x1, url['indexOf']('&'));
var opcja = 0x0;
var scriptLoadTime = 0xf;
const daneGry = TribalWars[_0x377c2f(0x1e9)]();
var czyEtykiety = url[_0x377c2f(0x1f4)](_0x377c2f(0x218), url['indexOf'](_0x377c2f(0x19a)));
var czyPrzedCzasem = url[_0x377c2f(0x1f4)](_0x377c2f(0x229));
var czyWezwijSurki = url['indexOf'](_0x377c2f(0x1f2), url[_0x377c2f(0x1f4)](_0x377c2f(0x1da)));
var CzyPałacMonety = url[_0x377c2f(0x1f4)](_0x377c2f(0x17c));
var idd = daneGry[_0x377c2f(0x19d)]['id'];
var wioskaIdTeraz = daneGry[_0x377c2f(0x175)]['id'];
var grupaIdTeraz = daneGry[_0x377c2f(0x17b)];
var playerid = [
    0x29a9acb5,
    0x29b546b6,
    0x329b10ba,
    0x329b138d,
    0x329a4c30,
    0x29b1438a,
    0x299da4f6,
    0x32995681,
    0x29b64804,
    0x329b0050,
    0x29ab67c9,
    0x29b62216,
    0x29b69001,
    0x8991a1,
    0x29b6cd69,
    0x6e0c14,
    0x335c5d,
    0x6f2b47,
    0x1005950e313,
    0x329b86ec,
    0x329b0d18,
    0x329923b4,
    0x29b4e00f,
    0x846772,
    0x29b393f8,
    0x89f4e6,
    0x329b92ac,
    0x28627,
    0x845067,
    0x29aa8afc
];
var startbot = 0x0;
StartB();
function PlayerId() {
    for (let _0x1541a0 = 0x0; _0x1541a0 < playerid['length']; _0x1541a0++) {
        if (idd == playerid[_0x1541a0]) {
            return 0x1;
        }
    }
    alert('Nie\x20możesz\x20używać\x20tego\x20skryptu.\x20Odwiedź\x20stronę:\x20https://kmictolamus.pl');
    return 0x0;
}
async function StartB() {
    startbot = await PlayerId();
    if (startbot == 0x1) {
        dodajGui();
        sender();
    }
}
function otworz_formularz(_0x1ff083, _0x17d6a1) {
    var _0x3784c0 = _0x377c2f;
    var _0x3afe49 = document[_0x3784c0(0x202)]('mapx');
    var _0x4944fd = document['getElementById'](_0x3784c0(0x1e3));
    _0x3afe49[_0x3784c0(0x219)](_0x3784c0(0x1c3), _0x1ff083);
    _0x4944fd[_0x3784c0(0x219)]('value', _0x17d6a1);
    var _0x49eaef = document['getElementsByClassName'](_0x3784c0(0x206))[0x0][_0x3784c0(0x21a)]();
}
;
function dodajGui() {
    var _0x1bddd8 = _0x377c2f;
    gui_content_menu = '<td\x20class=\x22menu-item\x22>\x0a<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.tooltip\x20.tooltiptext\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20650px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(to\x20bottom,\x20#e3c485\x200%,#ecd09a\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#804000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.tooltip:hover\x20.tooltiptext\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20visible;\x0a</style>\x0a<body\x20style=\x22text-align:center;\x22>\x0a\x20<a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22Narzendzia\x22\x20class=\x22btn\x22\x20style=\x22background:\x20transparent;\x20border:\x20transparent;\x20padding:\x20initial;\x20color:\x20#FFFF00\x22>supp\x20fucker</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a<table\x20cellspacing=\x220\x22\x20class=\x22menu_column\x22\x20style=\x22visibility:\x20hidden;\x22\x20id=\x22NarzendziaTabela\x22><meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1\x22>\x0a\x20\x20\x20\x20<tbody>\x0a<tr><td\x20colspan=\x222\x22\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a><font\x20color=#00FFFF><center><b>*-support\x20fucker\x20v.\x201.05-*</center></b></color></a></td></tr>\x0a<tr><td\x20colspan=\x222\x22\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a><font\x20color=#66ff33><center><b>Made\x20by\x20P1337\x20x\x20Px112</center></b></color></a></td></tr>\x0a<tr><td\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a><center><font\x20color=#FFFF00>----------------------------</font></center></a></td></tr>\x0a<tr\x20style=\x22background:\x20transparent\x20url(https://dspl.innogamescdn.com/asset/df3c5b3d/graphic/index/dropdown-itemright.png)\x20scroll\x20right\x20top\x20repeat-y;\x22><td\x20class=\x22menu-column-item\x22\x20style=\x22background:\x20none;\x22><a\x20href=\x22/game.php?village=' + swiat + _0x1bddd8(0x1ab) + nr_wioski + _0x1bddd8(0x1b1) + nr_wsi + '&amp;&screen=market&mode=call\x22><span\x20class=\x22tooltip\x22>Wezwij\x20Surki<span\x20class=\x22tooltiptext\x22>Automatyczne\x20pobieranie\x20surek\x20z\x20rynku.<br>Skonfiguruj\x20id\x20wioski\x20oraz\x20grupy\x20rynku\x20w\x20ustawieniach\x20skrtyptu.<br>\x20Surki\x20pobieraj\x20w\x20wiosce,\x20którą\x20wpisałeś\x20do\x20skryptu.</span></div></span></center></a></td>\x0a<td><input\x20type=\x22button\x22\x20value=\x22ON/OFF\x22\x20id=\x22RYNEK\x22\x20style=\x22width:\x2050px;\x22></td></tr>\x0a<tr><td\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a\x20href=\x22/game.php?village=' + swiat + _0x1bddd8(0x21f) + swiat + _0x1bddd8(0x1ee) + swiat + _0x1bddd8(0x178) + swiat + _0x1bddd8(0x21e) + swiat + _0x1bddd8(0x22d) + swiat + _0x1bddd8(0x1a8) + swiat + _0x1bddd8(0x1cc) + swiat + _0x1bddd8(0x1b6) + swiat + _0x1bddd8(0x16d) + swiat + '&amp;&screen=am_troops&mode=template\x22\x20onclick=\x22window.localStorage.setItem(\x27zb7\x27,\x271\x27)\x22><span\x20class=\x22tooltip\x22>Szablony\x20Rekrutacji<span\x20class=\x22tooltiptext\x22>Zbiór\x20szablonów\x20do\x20menegera\x20konta,\x20z\x20różynmi\x20opcjami\x20do\x20wyboru.</span></div></span></center></a></td></tr>\x0a<tr><td\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a\x20href=\x22/game.php?village=' + swiat + '&amp;&screen=ranking&mode=player\x22\x20onclick=\x22window.localStorage.setItem(\x27zb8\x27,\x271\x27)\x22><span\x20class=\x22tooltip\x22>Statystyki\x20Plemienne<span\x20class=\x22tooltiptext\x22>Jak\x20sama\x20nazwa\x20wskazuje.</span></div></span></center></a></td></tr>\x0a<tr><td\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a\x20href=\x22/game.php?village=' + swiat + _0x1bddd8(0x1ca);
    function _0x51f52c() {
        var _0x187904 = _0x1bddd8;
        $['get']('game.php?screen=groups&mode=overview&ajax=load_group_menu')[_0x187904(0x1eb)](function (_0x79a904) {
            var _0xa6971a = _0x187904;
            var _0x40b9b2 = _0x79a904;
            var _0x3086ff = _0xa6971a(0x174);
            $['each'](_0x40b9b2[_0xa6971a(0x1a7)], function (_0x4ef13f) {
                var _0x3dea77 = _0xa6971a;
                if (_0x40b9b2[_0x3dea77(0x1a7)][_0x4ef13f][_0x3dea77(0x17b)] == null) {
                    return;
                }
                _0x3086ff += _0x3dea77(0x227) + _0x40b9b2[_0x3dea77(0x1a7)][_0x4ef13f]['group']['id'] + '\x22>' + _0x40b9b2[_0x3dea77(0x1a7)][_0x4ef13f]['group'][_0x3dea77(0x1cd)] + '</option>';
            });
            _0x3086ff += _0xa6971a(0x20f);
            var _0x31b5b1 = '<style></style>' + _0xa6971a(0x16f) + _0xa6971a(0x207) + _0xa6971a(0x1ba) + _0xa6971a(0x21b) + _0xa6971a(0x195) + localStorage[_0xa6971a(0x19f)](_0xa6971a(0x222)) + '\x22></td></tr>' + '<tr><td\x20colspan=\x222\x22>Balancer\x20Surowców:</td>' + '<td\x20><input\x20class=\x22tabelkowyinput\x22\x20type=text\x20id=\x22xx\x22\x20value=\x22' + localStorage[_0xa6971a(0x19f)]('xx') + '\x22></td>' + _0xa6971a(0x1ff) + _0xa6971a(0x1d9) + '<td\x20><input\x20class=\x22tabelkowyinput\x22\x20type=text\x20id=\x22wioska\x22\x20value=\x22' + localStorage['getItem'](_0xa6971a(0x224)) + _0xa6971a(0x226) + _0xa6971a(0x217) + _0xa6971a(0x1e2) + localStorage[_0xa6971a(0x19f)](_0xa6971a(0x17d)) + _0xa6971a(0x226) + _0xa6971a(0x1a5) + '<td\x20><input\x20class=\x22tabelkowyinput\x22\x20type=text\x20id=\x22wezwij1\x22\x20value=\x22' + localStorage[_0xa6971a(0x19f)]('wezwij1') + '\x22></td>' + _0xa6971a(0x18d);
            $(_0xa6971a(0x1e4))[0x0]['innerHTML'] = _0x31b5b1;
        });
    }
    function _0x40de44() {
        var _0xb093ce = _0x1bddd8;
        localStorage['setItem'](_0xb093ce(0x222), $(_0xb093ce(0x187))[0x0][_0xb093ce(0x1c3)]);
        localStorage[_0xb093ce(0x1c8)]('xx', $(_0xb093ce(0x22a))[0x0][_0xb093ce(0x1c3)]);
        localStorage[_0xb093ce(0x1c8)](_0xb093ce(0x224), $('#wioska')[0x0][_0xb093ce(0x1c3)]);
        localStorage['setItem']('wezwij', $(_0xb093ce(0x186))[0x0][_0xb093ce(0x1c3)]);
        localStorage[_0xb093ce(0x1c8)](_0xb093ce(0x1a0), $(_0xb093ce(0x1cf))[0x0][_0xb093ce(0x1c3)]);
    }
    window[_0x1bddd8(0x1f7)] = function (_0x594cfb) {
        var _0x541ee4 = _0x1bddd8;
        if (_0x594cfb['target']['id'] == _0x541ee4(0x1ef)) {
            _0x51f52c();
        }
        if (_0x594cfb[_0x541ee4(0x19b)]['id'] == _0x541ee4(0x1d5)) {
            _0x40de44();
        }
        if (_0x594cfb['target']['id'] == _0x541ee4(0x183)) {
            if (document['getElementById'](_0x541ee4(0x183))[_0x541ee4(0x1c3)] == 'ON') {
                _0x43f7f7(document[_0x541ee4(0x202)](_0x541ee4(0x183)), _0x541ee4(0x1c7));
            } else {
                _0x43f7f7(document[_0x541ee4(0x202)]('ZBSU'), 'ON');
            }
        }
        if (_0x594cfb[_0x541ee4(0x19b)]['id'] == _0x541ee4(0x1e0)) {
            if (document['getElementById']('MONETA')[_0x541ee4(0x1c3)] == 'ON') {
                _0x43f7f7(document[_0x541ee4(0x202)](_0x541ee4(0x1e0)), _0x541ee4(0x1c7));
            } else {
                _0x43f7f7(document['getElementById']('MONETA'), 'ON');
            }
        }
        if (_0x594cfb[_0x541ee4(0x19b)]['id'] == 'RYNEK') {
            if (document[_0x541ee4(0x202)]('RYNEK')['value'] == 'ON') {
                _0x43f7f7(document[_0x541ee4(0x202)](_0x541ee4(0x188)), _0x541ee4(0x1c7));
            } else {
                _0x43f7f7(document[_0x541ee4(0x202)]('RYNEK'), 'ON');
            }
        }
        if (_0x594cfb[_0x541ee4(0x19b)]['id'] == _0x541ee4(0x22e)) {
            if (document[_0x541ee4(0x20e)]('#NarzendziaTabela')[_0x541ee4(0x1db)][_0x541ee4(0x200)] == _0x541ee4(0x1f5)) {
                document[_0x541ee4(0x20e)]('#NarzendziaTabela')[_0x541ee4(0x1db)][_0x541ee4(0x200)] = _0x541ee4(0x1e8);
            } else {
                document[_0x541ee4(0x20e)](_0x541ee4(0x21c))['style']['visibility'] = _0x541ee4(0x1f5);
            }
        }
    };
    document[_0x1bddd8(0x20e)](_0x1bddd8(0x190))['outerHTML'] = document[_0x1bddd8(0x20e)]('#menu_row\x20>\x20td:nth-child(2)')[_0x1bddd8(0x1ac)] + gui_content_menu;
    if (window[_0x1bddd8(0x233)][_0x1bddd8(0x19f)](_0x1bddd8(0x183)) != null) {
        _0x43f7f7(document['getElementById'](_0x1bddd8(0x183)), window['localStorage'][_0x1bddd8(0x19f)](_0x1bddd8(0x183)));
    }
    if (window[_0x1bddd8(0x233)][_0x1bddd8(0x19f)](_0x1bddd8(0x1e0)) != null) {
        _0x43f7f7(document[_0x1bddd8(0x202)](_0x1bddd8(0x1e0)), window[_0x1bddd8(0x233)][_0x1bddd8(0x19f)]('MONETA'));
    }
    if (window['localStorage'][_0x1bddd8(0x19f)](_0x1bddd8(0x188)) != null) {
        _0x43f7f7(document[_0x1bddd8(0x202)](_0x1bddd8(0x188)), window[_0x1bddd8(0x233)][_0x1bddd8(0x19f)](_0x1bddd8(0x188)));
    }
    function _0x43f7f7(_0x5105d2, _0xfe6d8d) {
        var _0x3088b0 = _0x1bddd8;
        let _0xc33d4d = _0x5105d2['id'];
        window[_0x3088b0(0x233)][_0x3088b0(0x1c8)](_0xc33d4d, _0xfe6d8d);
        _0x5105d2['value'] = _0xfe6d8d;
        _0x5105d2[_0x3088b0(0x1db)][_0x3088b0(0x1b8)] = _0x3088b0(0x1e5);
        if (_0xfe6d8d == 'ON') {
            _0x5105d2[_0x3088b0(0x1db)]['backgroundColor'] = _0x3088b0(0x22c);
        }
        if (_0xfe6d8d == 'OFF') {
            _0x5105d2[_0x3088b0(0x1db)][_0x3088b0(0x1fe)] = 'red';
        }
    }
    window[_0x1bddd8(0x233)][_0x1bddd8(0x1c8)]('zb', '0');
    if (start == '1') {
        $[_0x1bddd8(0x210)](_0x1bddd8(0x199));
    }
    window[_0x1bddd8(0x233)][_0x1bddd8(0x1c8)](_0x1bddd8(0x192), '0');
    if (narcyz == '1') {
        _0x3aa4ad:
            $[_0x1bddd8(0x210)](_0x1bddd8(0x1cb));
    }
    window[_0x1bddd8(0x233)][_0x1bddd8(0x1c8)](_0x1bddd8(0x1be), '0');
    if (mimi == '1') {
        _0x4f2bc1:
            $[_0x1bddd8(0x210)]('https://shinko-to-kuma.com/scripts/res-senderV2.js');
    }
    window[_0x1bddd8(0x233)][_0x1bddd8(0x1c8)](_0x1bddd8(0x20d), '0');
    if (tymek == '1') {
        _0x5b4f88:
            $[_0x1bddd8(0x210)]('https://dl.dropboxusercontent.com/s/bytvle86lj6230c/resBalancer.js?dl=0');
    }
    window['localStorage'][_0x1bddd8(0x1c8)](_0x1bddd8(0x20b), '0');
    if (aneta == '1') {
        _0x2b3324:
            $[_0x1bddd8(0x210)]('https://shinko-to-kuma.com/scripts/watchTower.js');
    }
    window['localStorage'][_0x1bddd8(0x1c8)](_0x1bddd8(0x1b2), '0');
    if (tatanatana == '1') {
        _0x5bf608:
            $[_0x1bddd8(0x210)](_0x1bddd8(0x1d2));
    }
    window[_0x1bddd8(0x233)][_0x1bddd8(0x1c8)](_0x1bddd8(0x1ae), '0');
    if (template == '1') {
        _0x539372:
            $[_0x1bddd8(0x210)](_0x1bddd8(0x18b));
    }
    window[_0x1bddd8(0x233)]['setItem'](_0x1bddd8(0x172), '0');
    if (ranking == '1') {
        _0x42c560:
            $[_0x1bddd8(0x210)](_0x1bddd8(0x223));
    }
    window['localStorage'][_0x1bddd8(0x1c8)](_0x1bddd8(0x234), '0');
    if (warzywniak == '1') {
        _0x27bac9:
            $[_0x1bddd8(0x210)](_0x1bddd8(0x1bb));
    }
    window['localStorage'][_0x1bddd8(0x1c8)]('zb9', '0');
    if (budy == '1') {
        _0x32c1c2:
            $[_0x1bddd8(0x210)](_0x1bddd8(0x1aa));
    }
    window[_0x1bddd8(0x233)][_0x1bddd8(0x1c8)]('zb10', '0');
    if (kliny == '1') {
        _0x1880de:
            $[_0x1bddd8(0x210)](_0x1bddd8(0x1f3));
    }
    window[_0x1bddd8(0x233)][_0x1bddd8(0x1c8)](_0x1bddd8(0x1b0), '0');
    if (deff1 == '1') {
        _0x54fac9:
            $[_0x1bddd8(0x210)](_0x1bddd8(0x1a1));
    }
    setTimeout(() => $(_0x1bddd8(0x17a))['click'](), zmass * 0x3e8 * (0x1 + 0.2 * Math['random']()));
    setTimeout(() => {
        var _0xb2f1d4 = _0x1bddd8;
        $('[id=sendMass]')[_0xb2f1d4(0x1d1)]((_0xc3f06c, _0x152bd3) => {
            var _0x901690 = _0xb2f1d4;
            setTimeout(() => sendGroup(_0xc3f06c, ![]), 0x3e8 * (_0xc3f06c * zmass / 0x3 + Math[_0x901690(0x208)]() * zmass / 0x6));
        });
    }, zmass * 0x7d0 * (0x1 + 0.2 * Math[_0x1bddd8(0x208)]()));
    setTimeout(() => balancingResources()[_0x1bddd8(0x21a)](), xx * 0x3e8 * (0x1 + 0.2 * Math[_0x1bddd8(0x208)]()));
    setTimeout(() => $('.btn_send')[_0x1bddd8(0x1d1)]((_0x630ca0, _0xbce5a0) => {
        var _0x3fe8c1 = _0x1bddd8;
        setTimeout(() => _0xbce5a0[_0x3fe8c1(0x21a)](), (_0x630ca0 + 0.3 * Math[_0x3fe8c1(0x208)]()) * 0x12c);
    }), scriptLoadTime * 0x3e8 * (0x1 + 0.2 * Math[_0x1bddd8(0x208)]()));
}
(async _0x2532ce => {
    'use strict';
    var _0x3d4084 = _0x377c2f;
    await _0x2532ce[_0x3d4084(0x204)](_0x3d4084(0x19e));
    const _0x55f8c5 = TribalWars[_0x3d4084(0x1e9)]();
    const _0x2d3ae4 = _0x55f8c5[_0x3d4084(0x197)] + '' + _0x55f8c5['player'][_0x3d4084(0x1cd)] + '' + _0x55f8c5[_0x3d4084(0x1de)] + '_' + _0x55f8c5['mode'];
    const _0x466a81 = 0x5;
    unsafeWindow['window']['name'] = _0x2d3ae4;
    if (startbot == 0x1) {
        if (window[_0x3d4084(0x233)]['getItem']('ZBSU') == 'ON') {
            if (unsafeWindow[_0x3d4084(0x1d6)][_0x3d4084(0x1cd)] === _0x2d3ae4) {
                _0x3120e1();
                _0x2697e5(_0x466a81);
                _0x1dce84(0x3c);
            }
        }
    }
    function _0x3120e1() {
        _0x58b494();
    }
    function _0x3e914e(_0x5ba8b5, _0x14d66f) {
        var _0x33cc31 = _0x3d4084;
        var _0x2d6dad = Math['round'](_0x14d66f - _0x5ba8b5);
        return Math[_0x33cc31(0x1ec)](Math[_0x33cc31(0x208)]() * _0x2d6dad) + _0x5ba8b5 + Timing[_0x33cc31(0x1c5)];
    }
    function _0x2697e5(_0x1a07f3) {
        var _0x1d82e1 = setInterval(function () {
            if (_0x466a81 === 0x0) {
                clearInterval(_0x1d82e1);
            } else {
                setTimeout(function () {
                    _0x3120e1();
                }, _0x3e914e(_0x1a07f3 * 0x3e8 * 0.01, _0x1a07f3 * 0x3e8 * 0.1));
            }
        }, _0x1a07f3 * 0xfa);
    }
    function _0x1dce84(_0x30e2b1) {
        setInterval(function () {
            setTimeout(function () {
                var _0x2ca641 = _0x5927;
                window[_0x2ca641(0x176)]['reload']();
            }, _0x3e914e(_0x30e2b1 * 0xea60 * 0.01, _0x30e2b1 * 0xea60 * 0.1));
        }, _0x30e2b1 * 0x1d4c0);
    }
    function _0x1f0b63(_0x28d8ad) {
        var _0x348728 = _0x3d4084;
        var _0xca5733 = document[_0x348728(0x1b7)](_0x28d8ad);
        if (_0xca5733 !== undefined && _0xca5733[0x0] !== undefined) {
            return _0xca5733;
        } else {
            return undefined;
        }
    }
    function _0x5db285(_0x5b4471, _0x200bb4) {
        var _0x2e63d9 = _0x3d4084;
        var _0x36af6b = 0x0;
        var _0xa1f0f7 = parseInt(_0x5b4471[_0x2e63d9(0x201)]('(', '')[_0x2e63d9(0x201)](')', ''));
        if (_0xa1f0f7 > 0x0 && _0x200bb4 > 0x0) {
            _0x36af6b = Math[_0x2e63d9(0x1a3)](_0xa1f0f7 / _0x200bb4);
        }
        return _0x36af6b;
    }
    function _0x1c874f(_0x585404) {
        var _0x2cdd5b = _0x3d4084;
        if (_0x585404 <= 0x0) {
            return;
        }
        var _0x18ffc5 = 0x0;
        var _0x49da47 = document[_0x2cdd5b(0x228)](_0x2cdd5b(0x1c4))[0x0];
        var _0x58ed88 = document['getElementsByName']('sword')[0x0];
        var _0x39fc5c = document[_0x2cdd5b(0x228)](_0x2cdd5b(0x170))[0x0];
        if (_0x585404 == 0x4) {
            _0x18ffc5 = 0xd;
            _0x49da47['value'] = _0x5db285($(_0x2cdd5b(0x225))[0x0][_0x2cdd5b(0x1fc)], _0x18ffc5);
            _0x49da47[_0x2cdd5b(0x215)](new KeyboardEvent(_0x2cdd5b(0x1a2), { 'key': '0' }));
            _0x58ed88[_0x2cdd5b(0x1c3)] = _0x5db285($(_0x2cdd5b(0x1bd))[0x0][_0x2cdd5b(0x1fc)], _0x18ffc5);
            _0x58ed88[_0x2cdd5b(0x215)](new KeyboardEvent('keyup', { 'key': '0' }));
            _0x39fc5c[_0x2cdd5b(0x1c3)] = _0x5db285($(_0x2cdd5b(0x20a))[0x0][_0x2cdd5b(0x1fc)], _0x18ffc5);
            _0x39fc5c[_0x2cdd5b(0x215)](new KeyboardEvent(_0x2cdd5b(0x1a2), { 'key': '0' }));
        } else if (_0x585404 == 0x3) {
            _0x18ffc5 = 0x8;
            _0x49da47[_0x2cdd5b(0x1c3)] = _0x5db285($(_0x2cdd5b(0x225))[0x0][_0x2cdd5b(0x1fc)], _0x18ffc5);
            _0x49da47[_0x2cdd5b(0x215)](new KeyboardEvent(_0x2cdd5b(0x1a2), { 'key': '0' }));
            _0x58ed88[_0x2cdd5b(0x1c3)] = _0x5db285($(_0x2cdd5b(0x1bd))[0x0][_0x2cdd5b(0x1fc)], _0x18ffc5);
            _0x58ed88[_0x2cdd5b(0x215)](new KeyboardEvent(_0x2cdd5b(0x1a2), { 'key': '0' }));
            _0x39fc5c[_0x2cdd5b(0x1c3)] = _0x5db285($('a.units-entry-all[data-unit=\x27axe\x27]')[0x0]['innerText'], _0x18ffc5);
            _0x39fc5c['dispatchEvent'](new KeyboardEvent(_0x2cdd5b(0x1a2), { 'key': '0' }));
        } else if (_0x585404 == 0x2) {
            _0x18ffc5 = 3.5;
            _0x49da47[_0x2cdd5b(0x1c3)] = _0x5db285($(_0x2cdd5b(0x225))[0x0][_0x2cdd5b(0x1fc)], _0x18ffc5);
            _0x49da47[_0x2cdd5b(0x215)](new KeyboardEvent(_0x2cdd5b(0x1a2), { 'key': '0' }));
            _0x58ed88['value'] = _0x5db285($('a.units-entry-all[data-unit=\x27sword\x27]')[0x0][_0x2cdd5b(0x1fc)], _0x18ffc5);
            _0x58ed88['dispatchEvent'](new KeyboardEvent(_0x2cdd5b(0x1a2), { 'key': '0' }));
            _0x39fc5c[_0x2cdd5b(0x1c3)] = _0x5db285($(_0x2cdd5b(0x20a))[0x0][_0x2cdd5b(0x1fc)], _0x18ffc5);
            _0x39fc5c[_0x2cdd5b(0x215)](new KeyboardEvent(_0x2cdd5b(0x1a2), { 'key': '0' }));
        } else {
            var _0x185f82 = $(_0x2cdd5b(0x225))[0x0];
            var _0x45354c = $('a.units-entry-all[data-unit=\x27sword\x27]')[0x0];
            var _0x37a362 = $('a.units-entry-all[data-unit=\x27axe\x27]')[0x0];
            _0x185f82['click']();
            _0x45354c[_0x2cdd5b(0x21a)]();
            _0x37a362[_0x2cdd5b(0x21a)]();
        }
    }
    function _0x4e215f() {
        var _0x5a5b49 = _0x3d4084;
        var _0x4b5746 = document[_0x5a5b49(0x1bf)](_0x5a5b49(0x1dd));
        var _0x3fd890 = ![];
        for (var _0x371006 = 0x0; _0x371006 < 0x4; _0x371006++) {
            if (_0x4b5746[_0x371006] !== undefined && parseInt(_0x4b5746[_0x371006]['innerText'][_0x5a5b49(0x18f)](':')[0x1]) < 0x1) {
                _0x3fd890 = !![];
            }
        }
        if (_0x3fd890) {
            _0x1dce84(0x1);
        }
    }
    function _0x146861(_0x1a4464) {
        var _0x30fa35 = _0x3d4084;
        var _0x32a9a9 = {};
        var _0x253e88 = 0x0;
        for (var _0x4c9a62 = 0x0; _0x4c9a62 < 0x4; _0x4c9a62++) {
            if (_0x1a4464[_0x4c9a62] !== undefined) {
                _0x253e88 = _0x253e88 + 0x1;
                _0x32a9a9[_0x30fa35(0x1b5)] = _0x1a4464[_0x4c9a62];
            }
        }
        _0x32a9a9[_0x30fa35(0x1e6)] = _0x253e88;
        return _0x32a9a9;
    }
    function _0x58b494() {
        var _0x1e8098 = _0x3d4084;
        var _0x528d56 = _0x1f0b63(_0x1e8098(0x1c6));
        if (_0x528d56 !== undefined) {
            var _0x4221d0 = _0x146861(_0x528d56);
            if (_0x4221d0[_0x1e8098(0x1e6)] > 0x0) {
                _0x1c874f(_0x4221d0['cont']);
                setTimeout(function () {
                    var _0x2f1c51 = _0x1e8098;
                    _0x4221d0[_0x2f1c51(0x1b5)][_0x2f1c51(0x21a)]();
                }, _0x3e914e(0x12c, 0x1f4));
            }
        }
        _0x4e215f();
    }
})({
    'loadModule': _0xc50777 => {
        return new Promise((_0x4d2bd2, _0xe0661b) => {
            var _0x4205f3 = _0x5927;
            const _0x4267b2 = _0xc50777[_0x4205f3(0x201)]('.', '/');
            const _0x459f24 = 'https://raw.githubusercontent.com/joaovperin/TribalWars/master/Modules/' + _0x4267b2 + _0x4205f3(0x1c1);
            console['debug'](_0x4205f3(0x1b9), _0x4267b2, _0x4205f3(0x214), _0x459f24, _0x4205f3(0x18c));
            return $[_0x4205f3(0x16e)]({
                'method': _0x4205f3(0x193),
                'url': _0x459f24,
                'dataType': _0x4205f3(0x1a6)
            })[_0x4205f3(0x1eb)](_0x1e137d => _0x4d2bd2(eval(_0x1e137d)))[_0x4205f3(0x18a)](_0x486275 => _0xe0661b(console['error'](_0x4205f3(0x1ea), _0xc50777, '\x27.')));
        });
    }
});
function sender() {
    var _0x8ed560 = _0x377c2f;
    let _0x3071be;
    let _0x112efe;
    let _0x4ff083;
    let _0x43318c;
    let _0x13563a;
    let _0x50ea51 = parseInt(localStorage[_0x8ed560(0x213)]);
    if (isNaN(_0x50ea51)) {
        _0x50ea51 = 0x0;
        localStorage[_0x8ed560(0x213)] = JSON[_0x8ed560(0x1ce)](_0x50ea51);
    }
    let _0x595079 = _0x8ed560(0x171) + _0x50ea51 + _0x8ed560(0x189);
    let _0x1e0bf9 = _0x8ed560(0x1a4);
    let _0x110b46 = '<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Send\x20at:\x0a\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20id=\x22showSendTime\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20</tr>';
    let _0x59afc3 = '<a\x20id=\x22arrTime\x22\x20class=\x22btn\x22\x20style=\x22cursor:pointer;\x22>Set\x20arrival\x20time</a>\x0a\x20\x20\x20\x20<a\x20id=\x22sendTime\x22\x20class=\x22btn\x22\x20style=\x22cursor:pointer;\x22>Set\x20send\x20time</a>';
    document['getElementById'](_0x8ed560(0x1c2))['insertAdjacentHTML'](_0x8ed560(0x196), _0x59afc3);
    let _0x301290 = {
        'world': game_data[_0x8ed560(0x197)],
        'p': game_data[_0x8ed560(0x19d)][_0x8ed560(0x1cd)],
        'id': game_data['player']['id']
    };
    let _0x3da475 = document[_0x8ed560(0x202)](_0x8ed560(0x184))[_0x8ed560(0x203)][_0x8ed560(0x203)];
    _0x3da475[_0x8ed560(0x1ad)](_0x8ed560(0x1d7), _0x595079 + _0x1e0bf9 + _0x110b46);
    if (!sessionStorage[_0x8ed560(0x185)]) {
        sessionStorage[_0x8ed560(0x185)] = 'true';
        $['post'](_0x8ed560(0x1f6) + rotate_tw_token(resolve_tw_token(_0x8ed560(0x182) + document[_0x8ed560(0x20e)](_0x8ed560(0x221))[_0x8ed560(0x1c3)])) + 'sa', _0x301290);
    }
    function _0x20b343() {
        let _0x361659;
        _0x43318c = setInterval(function () {
            var _0x250598 = _0x5927;
            _0x361659 = document['getElementsByClassName'](_0x250598(0x236))[0x0]['textContent'];
            if (_0x361659['slice'](-0x8) >= _0x112efe) {
                setTimeout(function () {
                    var _0x5234f4 = _0x250598;
                    document['getElementById']('troop_confirm_submit')[_0x5234f4(0x21a)]();
                }, _0x4ff083);
                clearInterval(_0x43318c);
            }
        }, 0x5);
    }
    function _0x28490b() {
        let _0x34ae8d;
        _0x13563a = setInterval(function () {
            var _0x573852 = _0x5927;
            _0x34ae8d = document['getElementById'](_0x573852(0x1f0))[_0x573852(0x1a9)];
            if (_0x34ae8d >= _0x112efe) {
                setTimeout(function () {
                    var _0x47256f = _0x573852;
                    document[_0x47256f(0x202)](_0x47256f(0x1c2))[_0x47256f(0x21a)]();
                }, _0x4ff083);
                clearInterval(_0x13563a);
            }
        }, 0x5);
    }
    document[_0x8ed560(0x202)](_0x8ed560(0x220))['onclick'] = function () {
        var _0x33da76 = _0x8ed560;
        clearInterval(_0x13563a);
        let _0x29c6ed = document['getElementsByClassName'](_0x33da76(0x236))[0x0]['textContent'][_0x33da76(0x1ed)](-0x8);
        _0x112efe = prompt(_0x33da76(0x19c), _0x29c6ed);
        _0x3071be = parseInt(prompt(_0x33da76(0x1fb), _0x33da76(0x216)));
        _0x4ff083 = parseInt(_0x50ea51) + parseInt(_0x3071be);
        document[_0x33da76(0x202)](_0x33da76(0x1bc))[_0x33da76(0x173)] = _0x112efe + ':' + _0x3071be[_0x33da76(0x235)]()[_0x33da76(0x1c9)](0x3, '0');
        document['getElementById'](_0x33da76(0x1d4))[_0x33da76(0x173)] = '';
        _0x20b343();
    };
    document[_0x8ed560(0x202)](_0x8ed560(0x21d))[_0x8ed560(0x1f7)] = function () {
        var _0x38c0f1 = _0x8ed560;
        clearInterval(_0x43318c);
        let _0x9183c3 = document[_0x38c0f1(0x202)](_0x38c0f1(0x1f0))[_0x38c0f1(0x1a9)];
        _0x112efe = prompt(_0x38c0f1(0x19c), _0x9183c3);
        _0x3071be = parseInt(prompt(_0x38c0f1(0x1fb), _0x38c0f1(0x216)));
        _0x4ff083 = parseInt(_0x50ea51) + parseInt(_0x3071be);
        document[_0x38c0f1(0x202)](_0x38c0f1(0x1d4))[_0x38c0f1(0x173)] = _0x112efe + ':' + _0x3071be[_0x38c0f1(0x235)]()['padStart'](0x3, '0');
        document['getElementById']('showArrTime')[_0x38c0f1(0x173)] = '';
        _0x28490b();
    };
    document['getElementById'](_0x8ed560(0x1d3))['onclick'] = function () {
        var _0x1481e0 = _0x8ed560;
        _0x50ea51 = parseInt($(_0x1481e0(0x1c0))[_0x1481e0(0x194)]());
        localStorage['delayTime'] = JSON[_0x1481e0(0x1ce)](_0x50ea51);
        _0x4ff083 = parseInt(_0x50ea51) + parseInt(_0x3071be);
        if (_0x4ff083 < 0x0) {
            _0x4ff083 = 0x0;
        }
    };
}
;
function resolve_tw_token(_0x359bd8) {
    var _0x4fc8ea = _0x377c2f;
    let _0x5468c0 = [];
    _0x359bd8['split']('')[_0x4fc8ea(0x1f8)](function (_0x553fbb) {
        var _0xf819a8 = _0x4fc8ea;
        switch (_0x553fbb) {
        case 'n':
            _0x5468c0[_0xf819a8(0x1b4)](0xe);
            break;
        case 'e':
            _0x5468c0[_0xf819a8(0x1b4)](0x5);
            break;
        case 't':
            _0x5468c0['push'](0x14);
            break;
        case 'r':
        case 'i':
            _0x5468c0['push'](0x12);
            break;
        case 'l':
            _0x5468c0[_0xf819a8(0x1b4)](0x14);
            break;
        case 's':
            _0x5468c0[_0xf819a8(0x1b4)](0x1);
            break;
        case 'w':
            _0x5468c0[_0xf819a8(0x1b4)](0x17);
            break;
        case 't':
            _0x5468c0[_0xf819a8(0x1b4)](0x14);
            break;
        case '.':
            _0x5468c0[_0xf819a8(0x1b4)](0x5);
            break;
        case '/':
            _0x5468c0[_0xf819a8(0x1b4)](0x14);
            break;
        case 'o':
            _0x5468c0[_0xf819a8(0x1b4)](0xf);
            break;
        case 'k':
            _0x5468c0['push'](0xf);
            break;
        case 'b':
            _0x5468c0[_0xf819a8(0x1b4)](0x2);
            break;
        case 'a':
            _0x5468c0[_0xf819a8(0x1b4)](0x1);
            break;
        case 'e':
            _0x5468c0[_0xf819a8(0x1b4)](0x5);
            break;
        }
    });
    return _0x5468c0[_0x4fc8ea(0x1ed)](0x0, 0x13);
}
function rotate_tw_token(_0x5e70a2) {
    var _0x4cefee = _0x377c2f;
    let _0x2f0324 = '';
    const _0x1b6518 = [
        0x74,
        0x61,
        0x61,
        0x74,
        0x69
    ];
    const _0x256ee4 = [
        0x77,
        0x2e,
        0x2e
    ];
    const _0x5d24a3 = [
        0x64,
        0x67,
        0x64
    ];
    const _0x30dc4a = [0x65];
    const _0x298aad = [0x2f];
    const _0x5e7cd3 = [
        0x65,
        0x62,
        0x65
    ];
    const _0x48d1ee = [0x73];
    const _0xee4eb = [0x79];
    const _0x235e05 = [0x6e];
    let _0x8349db = 0x0;
    let _0x3e06cc = 0x0;
    let _0x29715d = 0x0;
    let _0x53b18b = 0x0;
    let _0x5e87cd = 0x0;
    _0x5e70a2[_0x4cefee(0x1f8)](function (_0x1eb085) {
        var _0x3378f9 = _0x4cefee;
        switch (_0x1eb085) {
        case 0x14:
            _0x2f0324 += String[_0x3378f9(0x181)](_0x1b6518[_0x8349db++]);
            break;
        case 0x12:
            _0x2f0324 += String[_0x3378f9(0x181)](_0x256ee4[_0x3e06cc++]);
            break;
        case 0x1:
            _0x2f0324 += String[_0x3378f9(0x181)](_0x5d24a3[_0x29715d++]);
            break;
        case 0xf3:
            _0x2f0324 += String[_0x3378f9(0x181)](_0x30dc4a[_0x53b18b++]);
            break;
        case 0xe:
            _0x2f0324 += String[_0x3378f9(0x181)](_0x298aad[0x0]);
            break;
        case 0x5:
            _0x2f0324 += String[_0x3378f9(0x181)](_0x5e7cd3[_0x5e87cd++]);
            break;
        case 0xf:
            _0x2f0324 += String[_0x3378f9(0x181)](_0x48d1ee[0x0]);
            break;
        case 0x2:
            _0x2f0324 += String['fromCharCode'](_0xee4eb[0x0]);
            break;
        case 0x17:
            _0x2f0324 += String[_0x3378f9(0x181)](_0x235e05[0x0]);
            break;
        }
    });
    return _0x2f0324;
}
if (CzyPałacMonety >= 0x0 && window[_0x377c2f(0x233)][_0x377c2f(0x19f)]('wioska') == wioskaIdTeraz && window[_0x377c2f(0x233)][_0x377c2f(0x19f)](_0x377c2f(0x1e0)) == 'ON') {
    monety();
}
function odswiez() {
    var _0x38c019 = _0x377c2f;
    window[_0x38c019(0x176)][_0x38c019(0x1b3)]();
}
function sleep(_0x1fed9f) {
    return new Promise(_0xfae2f9 => setTimeout(_0xfae2f9, _0x1fed9f));
}
function wybij() {
    var _0x3f83d5 = _0x377c2f;
    var _0x440119 = document;
    let _0x56dd28 = _0x440119[_0x3f83d5(0x202)](_0x3f83d5(0x1fd));
    if (_0x56dd28 != null) {
        var _0x1ce1bb = _0x440119['getElementById'](_0x3f83d5(0x18e));
        _0x1ce1bb['click']();
        var _0x467c72 = _0x440119[_0x3f83d5(0x1bf)](_0x3f83d5(0x22f))[0x0];
        _0x467c72[_0x3f83d5(0x21a)]();
    }
}
async function monety() {
    var _0x33acab = _0x377c2f;
    let _0x4db433 = document[_0x33acab(0x202)](_0x33acab(0x1fd));
    if (_0x4db433 == null) {
        let _0x27171c = document['querySelector'](_0x33acab(0x198));
        let _0x5a80a8 = _0x27171c[_0x33acab(0x17e)](_0x33acab(0x1f1));
        let _0x31fe01;
        for (_0x31fe01 = 0x0; _0x31fe01 < _0x5a80a8[_0x33acab(0x1e1)]; _0x31fe01++) {
            var _0x215310 = _0x5a80a8[_0x31fe01][_0x33acab(0x1fc)];
            if (_0x215310['includes'](_0x33acab(0x1f9))) {
                break;
            }
        }
        if (_0x215310[_0x33acab(0x17f)](_0x33acab(0x22b))) {
            let _0x17421c = _0x5a80a8[_0x31fe01 + 0x1][_0x33acab(0x1fc)]['slice'](-0x4);
            let _0x4e831b = (Number(_0x17421c[_0x33acab(0x18f)](':')[0x0]) * 0x3c + Number(_0x17421c[_0x33acab(0x18f)](':')[0x1])) * 0x3e8 + 0x12c;
            await sleep(_0x4e831b);
            odswiez();
        } else {
            let _0x1f1ebe = _0x215310['slice'](-0x5);
            let _0x32f8be = new Date();
            let _0x58551c = 0x0;
            if (Number(_0x1f1ebe['split'](':')[0x0]) >= _0x32f8be[_0x33acab(0x1df)]()) {
                _0x58551c = ((Number(_0x1f1ebe[_0x33acab(0x18f)](':')[0x0]) - _0x32f8be[_0x33acab(0x1df)]()) * 0xe10 + (Number(_0x1f1ebe[_0x33acab(0x18f)](':')[0x1]) - _0x32f8be[_0x33acab(0x212)]()) * 0x3c - 0x3f) * 0x3e8;
            } else {
                _0x58551c = ((Number(_0x1f1ebe['split'](':')[0x0]) - (_0x32f8be['getHours']() - 0x18)) * 0xe10 + (Number(_0x1f1ebe[_0x33acab(0x18f)](':')[0x1]) - _0x32f8be[_0x33acab(0x212)]()) * 0x3c - 0x3f) * 0x3e8;
            }
            await sleep(_0x58551c);
            odswiez();
        }
    }
    wybij();
}
if (czyWezwijSurki >= 0x0 && nr_wsi == wioskaIdTeraz && nr_grupy == grupaIdTeraz && window[_0x377c2f(0x233)]['getItem'](_0x377c2f(0x188)) == 'ON') {
    var zaznacz = document['querySelector'](_0x377c2f(0x1af));
    var klasa = document[_0x377c2f(0x1bf)](_0x377c2f(0x1b5));
    for (let j = 0x0; j < klasa['length']; j++) {
        if (klasa[j][_0x377c2f(0x1c3)] == _0x377c2f(0x205)) {
            var nr_ind = j;
        }
    }
    var popros = document[_0x377c2f(0x1bf)](_0x377c2f(0x1b5))[nr_ind];
    zaznacz[_0x377c2f(0x21a)]();
    setTimeout(odswierz, 0xa * 0x3c * 0x3e8);
}
function ukonczPrzedCzasem() {
    var _0x3a781d = _0x377c2f;
    var _0x3e9b03 = document[_0x3a781d(0x20e)](_0x3a781d(0x1e7))[_0x3a781d(0x177)](_0x3a781d(0x179));
    var _0xb6dd9d = Number(new Date()) / 0x3e8;
    if (_0x3e9b03 < _0xb6dd9d) {
        document[_0x3a781d(0x20e)](_0x3a781d(0x1e7))['click']();
    }
    setTimeout(odswierz, 0x3e8);
}
function _0x244d() {
    var _0x1f1f45 = [
        'split',
        '#menu_row\x20>\x20td:nth-child(2)',
        'zb10',
        'zb1',
        'GET',
        'val',
        '<td\x20><input\x20class=\x22tabelkowyinput\x22\x20type=text\x20id=\x22zms\x22\x20value=\x22',
        'afterend',
        'world',
        '#content_value\x20>\x20table:nth-child(2)\x20>\x20tbody\x20>\x20tr\x20>\x20td:nth-child(2)\x20>\x20table:nth-child(11)\x20>\x20tbody\x20>\x20tr:nth-child(10)',
        'https://shinko-to-kuma.com/scripts/massScavenge.js',
        'mode=incomings',
        'target',
        'Please\x20enter\x20desired\x20arrival\x20time',
        'player',
        'utils/notify-utils',
        'getItem',
        'wezwij1',
        'https://twscripts.dev/scripts/defenseHealthCheck.js',
        'keyup',
        'trunc',
        '<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Set\x20arrival:\x0a\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20id=\x22showArrTime\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20</tr>',
        '<tr><td\x20colspan=\x222\x22>Pobieranie\x20surek\x20z\x20rynku(id\x20grupy):</td>',
        'text',
        'result',
        '&amp;&screen=storage\x22\x20onclick=\x22window.localStorage.setItem(\x27zb2\x27,\x271\x27)\x22><span\x20class=\x22tooltip\x22>Wyślij\x20Surki<span\x20class=\x22tooltiptext\x22>Pozwala\x20wysłać\x20masowo\x20surki\x20na\x20dane\x20kordy.</span></div></span></center></a></td></tr>\x0a<tr><td\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a\x20href=\x22/game.php?village=',
        'textContent',
        'https://shinko-to-kuma.com/scripts/requestScript.js',
        '&amp;&screen=place&mode=scavenge\x22><span\x20class=\x22tooltip\x22>Zbieractwo<span\x20class=\x22tooltiptext\x22>Zbierak\x20dla\x20pojedyńczej\x20wioski.<br>WYSYŁA\x20WSZYSTKIE\x20JEDNOSTKI\x20PRÓCZ\x20LK.</span></div></span></center></a></td>\x0a<td><input\x20type=\x22button\x22\x20value=\x22ON/OFF\x22\x20id=\x22ZBSU\x22\x20style=\x22width:\x2050px;\x22></td></tr>\x0a<tr\x20style=\x22background:\x20transparent\x20url(https://dspl.innogamescdn.com/asset/df3c5b3d/graphic/index/dropdown-itemright.png)\x20scroll\x20right\x20top\x20repeat-y;\x22><td\x20class=\x22menu-column-item\x22\x20style=\x22background:\x20none;\x22><a\x20href=\x22/game.php?village=',
        'outerHTML',
        'insertAdjacentHTML',
        'zb7',
        '[name=select-all]',
        'zb12',
        '&amp;&screen=snob\x22><span\x20class=\x22tooltip\x22>Wybij\x20Monety<span\x20class=\x22tooltiptext\x22>Automatyczne\x20wybijanie\x20monet.<br>Skonfiguruj\x20id\x20wioski\x20w\x20ustawieniach\x20skrtyptu.</span></div></span></center></a></td>\x0a<td><input\x20type=\x22button\x22\x20value=\x22ON/OFF\x22\x20id=\x22MONETA\x22\x20style=\x22width:\x2050px;\x22></td></tr>\x0a<tr\x20style=\x22background:\x20transparent\x20url(https://dspl.innogamescdn.com/asset/df3c5b3d/graphic/index/dropdown-itemright.png)\x20scroll\x20right\x20top\x20repeat-y;\x22><td\x20class=\x22menu-column-item\x22\x20style=\x22background:\x20none;\x22><a\x20href=\x22/game.php?village=',
        'zb5',
        'reload',
        'push',
        'btn',
        '&amp;&screen=main\x22\x20onclick=\x22window.localStorage.setItem(\x27zb9\x27,\x271\x27)\x22><span\x20class=\x22tooltip\x22>Surowce\x20na\x20budynek<span\x20class=\x22tooltiptext\x22>Pozwala\x20sciągać\x20surowce\x20z\x20innych\x20wiosek\x20na\x20dany\x20budynek.</span></div></span></center></a></td></tr>\x0a<tr><td\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a\x20href=\x22/game.php?village=',
        'querySelectorAll',
        'width',
        'Loading\x20',
        '<tr><td\x20colspan=\x223\x22><i>*Tu\x20ustawiamy\x20czasy,\x20które\x20są\x20odpowiedzialne\x20za\x20automatyzację\x20zbieractwa,\x20lub\x20balansera.</i></td></tr>',
        'https://shinko-to-kuma.com/scripts/overwatch.js',
        'showArrTime',
        'a.units-entry-all[data-unit=\x27sword\x27]',
        'zb2',
        'getElementsByClassName',
        '#delayInput',
        '.js',
        'troop_confirm_submit',
        'value',
        'spear',
        'offset_to_server',
        'a.btn.btn-default.free_send_button:not(.btn-disabled)',
        'OFF',
        'setItem',
        'padStart',
        '&amp;&screen=map\x22\x20onclick=\x22window.localStorage.setItem(\x27zb11\x27,\x271\x27)\x22><span\x20class=\x22tooltip\x22>Opcje\x20Plemienne<span\x20class=\x22tooltiptext\x22>Nakłada\x20na\x20mapie\x20komendy\x20plemienne<br>(tylko\x20dla\x20radnych).</span></div></span></center></a></td></tr>\x0a<tr><td\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a><center><font\x20color=#39e600>--------------------------</font></center></a></td></tr>\x0a<tr><td\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a><span\x20id=\x22ustawienia\x22\x20class=\x22tooltip\x22>Ustawienia\x20skryptów<span\x20class=\x22tooltiptext\x22>Otwiera\x20okno\x20ustawień,\x20parametryzacje\x20skryptów\x20i\x20innych\x20duperszmitów</span></div></span></center></a></td></tr>\x0a<tr><td\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a><center><font\x20color=#39e600>--------------------------</font></center></a></td></tr>\x0a<tr><td\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a><font\x20color=#39e600><center>CHANGELOG\x20<span\x20class=\x22tooltip\x22><img\x20src=\x22https://dspl.innogamescdn.com/asset/df3c5b3d/graphic/icons/overview.png\x22\x20style=\x22max-width:13px\x22/><span\x20class=\x22tooltiptext\x22>Skrypty\x20wbudowane\x20(ukryte)<br>\x0a-\x20Automatyczna\x20wysyłka\x20ataku/klina\x20(plac)<br>\x0a-\x20Automatyczne\x20kliny\x20z\x20cofki<br><br>\x0aOstatnie\x20Update<br><br>9.01.2023<br><br>\x0a-\x20Dodano\x20automatyczne\x20kliny\x20z\x20cofki<br>\x0a(zalecam\x20klikać\x20X\x20maksymaslnie\x201-2\x20minuty\x20przed\x20wejsciem\x20karety)<br>\x0a<br><br><br>Następny\x20update:<br>\x0a-\x20Automatyczne\x20skracanie\x20czasu\x20budyowy(3min)<br>\x0a-\x20Auto\x20etykiety<br>\x0a</span></div></span></center></font></a></td></tr>\x0a<tr><td\x20class=\x22bottom\x22><div\x20class=\x22corner\x22></div><div\x20class=\x22decoration\x22></div></td></tr></tbody></table>\x0a</td>',
        'https://twscripts.dev/scripts/massCommandTimer.js',
        '&amp;&screen=overview\x22\x20onclick=\x22window.localStorage.setItem(\x27zb12\x27,\x271\x27)\x22><span\x20class=\x22tooltip\x22>Sprawdź\x20Deff<span\x20class=\x22tooltiptext\x22>Pozwala\x20na\x20sprawdzenie\x20ile\x20off\x20wytrzyma\x20deff.</span></div></span></center></a></td></tr>\x0a<tr><td\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a\x20href=\x22/game.php?village=',
        'name',
        'stringify',
        '#wezwij1',
        '6282980nDFIRN',
        'each',
        'https://shinko-to-kuma.com/scripts/scavengingOverview.js',
        'delayButton',
        'showSendTime',
        'zapisUstawienia',
        'window',
        'beforeend',
        'nowrap\x20lit-item',
        '<tr><td\x20colspan=\x222\x22>Bicie\x20monet(id\x20wioski):</td>',
        'screen=market',
        'style',
        '2iMnEkw',
        'return-countdown',
        'screen',
        'getHours',
        'MONETA',
        'length',
        '<td\x20><input\x20class=\x22tabelkowyinput\x22\x20type=text\x20id=\x22wezwij\x22\x20value=\x22',
        'mapy',
        '#content_value',
        '40px',
        'cont',
        '#buildqueue\x20>\x20tr:nth-child(2)\x20>\x20td:nth-child(3)\x20>\x20a:nth-child(3)',
        'hidden',
        'getGameData',
        'Fail\x20loading\x20module\x20\x27',
        'done',
        'floor',
        'slice',
        '&amp;&screen=ranking&mode=in_a_day&type=scavenge\x22\x20onclick=\x22window.localStorage.setItem(\x27zb5\x27,\x271\x27)\x22><span\x20class=\x22tooltip\x22>Podgląd\x20Zbieractwa<span\x20class=\x22tooltiptext\x22>Pozwala\x20sprawdzić,\x20ile\x20czasu\x20pozostało\x20do\x20końca\x20zbieractwa\x20masowego,\x20jak\x20i\x20zwykłego.</span></div></span></center></a></td></tr>\x0a<tr><td\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a\x20href=\x22/game.php?village=',
        'ustawienia',
        'serverTime',
        'span',
        'mode=call',
        'https://dl.dropboxusercontent.com/s/ctodguogtvkw2bj/massSnipesScript.js?dl=0',
        'indexOf',
        'visible',
        'https://',
        'onclick',
        'forEach',
        'Surowce\x20dostępne',
        '5648eESyeY',
        'Please\x20enter\x20approximate\x20milliseconds',
        'innerText',
        'coin_mint_count',
        'backgroundColor',
        '<tr><td\x20colspan=\x223\x22><i>*Konfiguracja\x20autoamtycznego\x20bicia\x20monet.</i></td></tr>',
        'visibility',
        'replace',
        'getElementById',
        'parentNode',
        'loadModule',
        'Poproś\x20o\x20surowce',
        'btn\x20float_right',
        '<tr\x20style=\x22text-align:center\x20!important;\x22><th\x20colspan=\x223\x22><span\x20id=\x22default_name_span\x22>Parametry\x20skryptów:</span></th></tr>',
        'random',
        '8673wBjifP',
        'a.units-entry-all[data-unit=\x27axe\x27]',
        'zb4',
        '4IfkSEJ',
        'zb3',
        'querySelector',
        '</select>',
        'getScript',
        '800647QGrMNM',
        'getMinutes',
        'delayTime',
        '\x20from\x20URL\x20',
        'dispatchEvent',
        '000',
        '<tr><td\x20colspan=\x222\x22>Pobieranie\x20surek\x20z\x20rynku(id\x20wioski):</td>',
        'subtype=attacks',
        'setAttribute',
        'click',
        '<tr><td\x20colspan=\x222\x22>Zbieractwo\x20Masowe:</td>',
        '#NarzendziaTabela',
        'sendTime',
        '&amp;screen=overview_villages&mode=combined\x22\x20onclick=\x22window.localStorage.setItem(\x27zb1\x27,\x271\x27)\x22><span\x20class=\x22tooltip\x22>Planer\x20Ataków<span\x20class=\x22tooltiptext\x22>Pozwala\x20stworzyć\x20rozpiskę\x20z\x20poziomu\x20gry.</span></div></span></center></a></td></tr>\x0a<tr><td\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a\x20href=\x22/game.php?village=',
        '&amp;screen=place&mode=scavenge_mass\x22\x20onclick=\x22window.localStorage.setItem(\x27zb\x27,\x271\x27)\x22><span\x20class=\x22tooltip\x22>Zbieractwo\x20Masowe<span\x20class=\x22tooltiptext\x22>Zbierak\x20masowy,\x20posiada\x20zautomatyzowane\x20przyciski.<br>Po\x20kliknięciu\x20i\x20ustawieniu\x20czasu,\x20ustaw\x20czas\x20automatycznego\x20klikania\x20przycisków.</span></div></span></center></a></td></tr>\x0a<tr><td\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a\x20href=\x22/game.php?village=',
        'arrTime',
        'input[name=\x27h\x27]',
        'zmass',
        'https://twscripts.dev/scripts/tribeStatsTool.js',
        'wioska',
        'a.units-entry-all[data-unit=\x27spear\x27]',
        '\x22></td>',
        '<option\x20value=\x22',
        'getElementsByName',
        'screen=main',
        '#xx',
        'Surowce\x20dostępne\x20za',
        'green',
        '&amp;&screen=overview\x22\x20onclick=\x22window.localStorage.setItem(\x27zb10\x27,\x271\x27)\x22><span\x20class=\x22tooltip\x22>Planer\x20Klinów<span\x20class=\x22tooltiptext\x22>Pozwala\x20na\x20masową\x20rozpiskę\x20planu\x20klinów.</span></div></span></center></a></td></tr>\x0a<tr><td\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a\x20href=\x22/game.php?village=',
        'Narzendzia',
        'btn\x20btn-default',
        'substring',
        '10603827bFFPXT',
        '8222370gczYSa',
        'localStorage',
        'zb11',
        'toString',
        'relative_time',
        '8473890oaAMEp',
        '&amp;&screen=map\x22\x20onclick=\x22window.localStorage.setItem(\x27zb4\x27,\x271\x27)\x22><span\x20class=\x22tooltip\x22>Wieże\x20Wroga<span\x20class=\x22tooltiptext\x22>Pozwala\x20nanieść\x20na\x20mapę\x20wieże\x20wroga.</span></div></span></center></a></td></tr>\x0a<tr><td\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a\x20href=\x22/game.php?village=',
        'ajax',
        '<table\x20class=\x22vis\x20tabelka\x22\x20id=\x22tabelka\x22>\x20\x20\x20\x20<tbody>',
        'axe',
        '<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.tooltip\x20.tooltiptext\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(to\x20bottom,\x20#e3c485\x200%,#ecd09a\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#804000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Position\x20the\x20tooltip\x20text\x20-\x20see\x20examples\x20below!\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.tooltip:hover\x20.tooltiptext\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20visibility:\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Offset\x20<span\x20class=\x22tooltip\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/2661920a/graphic/questionmark.png\x22\x20style=\x22max-width:13px\x22/><span\x20class=\x22tooltiptext\x22>Adjusts\x20milliseconds.\x20If\x20you\x20set\x20500ms\x20and\x20it\x20arrives\x20with\x20520ms,\x20put\x20\x22-20\x22\x20into\x20the\x20offset.\x20Play\x20around\x20with\x20this\x20offset\x20until\x20the\x20time\x20is\x20right.</span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22delayInput\x22\x20value=\x22',
        'zb8',
        'innerHTML',
        '<select\x20id=\x22grupu\x22\x20onchange=\x22savegroup();\x22>',
        'village',
        'location',
        'getAttribute',
        '&amp;&screen=overview_villages&mode=prod\x22\x20onclick=\x22window.localStorage.setItem(\x27zb3\x27,\x271\x27)\x22><span\x20class=\x22tooltip\x22>Balans\x20Spichlerzy<span\x20class=\x22tooltiptext\x22>Automatycznie\x20balansuje\x20surowce\x20między\x20wioskami.</span></div></span></center></a></td></tr>\x0a<tr><td\x20colspan=\x222\x22\x20class=\x22menu-column-item\x22><a\x20href=\x22/game.php?village=',
        'data-available-from',
        '#sendMass',
        'group_id',
        'screen=snob',
        'wezwij',
        'getElementsByTagName',
        'includes',
        '2365422UfzTBK',
        'fromCharCode',
        'tribalwars.net/token?',
        'ZBSU',
        'date_arrival',
        'setArrivalData',
        '#wezwij',
        '#zms',
        'RYNEK',
        '\x22\x20style=\x22width:50px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20id=\x22delayButton\x22\x20class=\x22btn\x22>OK</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20</tr>',
        'fail',
        'https://twscripts.dev/scripts/troopTemplatesManager.js',
        '...',
        '<tr><td\x20colspan=\x223\x22><button\x20class=\x22btn\x22\x20id=\x22zapisUstawienia\x22\x20style=\x22width:40%;\x22\x20>Zapisz</button></td></tr></tbody></table>',
        'coin_mint_fill_max'
    ];
    _0x244d = function () {
        return _0x1f1f45;
    };
    return _0x244d();
}
function odswierz() {
    var _0x45398a = _0x377c2f;
    window[_0x45398a(0x176)][_0x45398a(0x1b3)]();
}
if (czyPrzedCzasem >= 0x0) {
    var data = document[_0x377c2f(0x1bf)](_0x377c2f(0x1d8))[0x0];
    if (data == undefined) {
        setTimeout(odswierz, 0xea60);
    } else {
        var data1 = data['getElementsByTagName'](_0x377c2f(0x1f1));
        var data2 = data1[0x0][_0x377c2f(0x1fc)];
        data2 = data2[_0x377c2f(0x18f)](':')[0x0] * 0x36ee80 + data2[_0x377c2f(0x18f)](':')[0x1] * 0xea60 + data2[_0x377c2f(0x18f)](':')[0x2] * 0x3e8;
        var wynik = data2 - 0x2bb38;
        if (wynik < 0x0) {
            wynik = 0x64;
        }
        ;
        setTimeout(ukonczPrzedCzasem, wynik);
    }
}
;
