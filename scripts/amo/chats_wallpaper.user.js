// ==UserScript==
// @name        amo messenger chats wallpaper
// @namespace   https://github.com/dnklhtbgn/js-user-scripts
// @version     0.5
// @description Добавляем возможность ставить обои для чатов в мессенджере amo
// @author      dnklhtbgn
// @downloadURL https://github.com/dnklhtbgn/js-user-scripts/raw/master/scripts/amo/chats_wallpaper.user.js
// @updateURL   https://github.com/dnklhtbgn/js-user-scripts/raw/master/scripts/amo/chats_wallpaper.user.js
// @match       *://web.amo.tm/*
// @grant       GM_setValue
// @grant       GM_getValue
// ==/UserScript==

// Подлянка от некоторых браузеров, не во всех из них подтягивается GM_addStyle из @grant,
// поэтому делаем такой мув с определением собственного GM_addStyle
function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function () {
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
  // Какой-то загадочный прикол, не удается задать стили для нескольких селекторов в одном вызове GM_addStyle,
  // поэтому для каждого из селекторов вызываем функцию по новой
  GM_addStyle(
    '#app > div:nth-child(3) ._scrollbar.baron__clipper {' +
    'background-image: url(' + wallpaper_path + ');' +
    'background-repeat: no-repeat;' +
    'background-size: cover;' +
    '}'
  );
  GM_addStyle(
    '#app > div:nth-child(3) > div:nth-child(4) ._scrollbar.baron__clipper div[role="button"] {' +
    'background-color: rgb(255, 255, 255);' +
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
