// ==UserScript==
// @name        amo messenger chats wallpaper
// @namespace   https://github.com/dnklhtbgn/js-user-scripts
// @version     0.2
// @description Добавляем возможность ставить обои для чатов в мессенджере amo
// @match       *://web.amo.tm/*
// @grant       GM_setValue
// @grant       GM_getValue
// ==/UserScript==

function GM_addStyle(css) {
    const style = document.getElementById("GM_addStyleBy8626") || (function() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.id = "GM_addStyleBy8626";
        document.head.appendChild(style);
        return style;
    })();

    const sheet = style.sheet;

    sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

function setWallpaper(wallpaper_path) {
    GM_addStyle(
        '#app > div:nth-child(3) ._scrollbar.baron__clipper {' +
        'background-image: url(' + wallpaper_path + ');' +
        'background-repeat: no-repeat;' +
        'background-size: cover;' +
        '}'
    );
}

(function () {
    let wallpaper_path = GM_getValue('wallpaper_path', null);

    if (!wallpaper_path) {
        wallpaper_path = window.prompt('Введите ссылку на изображение для фона чатов');

        GM_setValue('wallpaper_path', wallpaper_path);
    }

    setWallpaper(wallpaper_path);
})();
