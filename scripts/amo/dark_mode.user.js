// ==UserScript==
// @name        amo messenger dark mode
// @namespace   https://github.com/dnklhtbgn/js-user-scripts
// @version     0.1
// @description Добавляем темную тему в мессенджер amo
// @author      dnklhtbgn
// @downloadURL https://github.com/dnklhtbgn/js-user-scripts/raw/master/scripts/amo/dark_mode.user.js
// @updateURL   https://github.com/dnklhtbgn/js-user-scripts/raw/master/scripts/amo/dark_mode.user.js
// @match       *://web.amo.tm/*
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

(function () {
  // Какой-то загадочный прикол, не удается задать стили для нескольких селекторов в одном вызове GM_addStyle,
  // поэтому для каждого из селекторов вызываем функцию по новой.
  // Все используемые цвета были сворованы с темной темы amoCRM.
  GM_addStyle(':root { --userBlockTitleColor: #f2f2f2; --userBlockSubtitleColor: #8092ad; }');
  GM_addStyle('body { background-color: #284860; }');
  GM_addStyle('#app > div:first-child { background-color: #07131d; }');
  GM_addStyle(
    '[class^="Sidebar_container"], [class^="ConversationHeader_header"], [class^="Tab_tab_content_wrapper"], [class^="style_search_container"] label:first-child, [class^="RegularMessage_message__"], [class^="MainInput_container__"] {' +
    'background: #153043;' +
    '}'
  );
  GM_addStyle('[class^="ConversationHeader_header"] { border-color: #284860; }');
  GM_addStyle('[class^="style_selected__"] { background: #163f5f !important; }');
  GM_addStyle('[class^="style_modal_drawer"] { background: #102535; }');
  GM_addStyle('#app > div:nth-child(3) ._scrollbar.baron__clipper { background: #0f2231; }');
  GM_addStyle('[class*="RegularMessage_is_outgoing__"] [class^="RegularMessage_message__"] { background: #264b79; }');
  GM_addStyle(
    '[class^="RegularMessage_message__"], [class^="ForwardMessage_container__"], [class^="ReferenceMessage_container__"], [class^="FeedTextarea_editable__"] {' +
    'color: #f2f2f2;' +
    '}'
  );
  GM_addStyle('[class^="RegularMessage_message_tail__"] { fill: #153043; }');
  GM_addStyle('[class*="RegularMessage_is_outgoing__"] [class^="RegularMessage_message_tail__"] { fill: #264b79; }');
  GM_addStyle('[class^="FeedTextarea_editable__"]:empty:after { color: #69768d; }');
  GM_addStyle(
    '[class^="RegularMessage_popover_button_bg__"] {' +
    'background: linear-gradient(215deg, #153043, hsla(0, 0%, 100%, 0) 50%);' +
    '}'
  );
  GM_addStyle(
    '[class*="RegularMessage_is_outgoing__"] [class^="RegularMessage_popover_button_bg__"] {' +
    'background: linear-gradient(215deg, #264b79, hsla(0, 0%, 100%, 0) 50%);' +
    '}'
  );
  GM_addStyle(
    '[class*="TabCaption_caption__"] {' +
    'background: linear-gradient(360deg, #153043 43.42%, #163f5f 100%) !important;' +
    '}'
  );
  GM_addStyle(
    '[class^="TabCaption_name__"], [class*="MessageTitle_user__"], [class^="UserLink_user_link__"], [class^="ServiceMessage_container__"] {' +
    'color: #8092ad;' +
    '}'
  );
  GM_addStyle(
    '[class^="Sidebar_container"] [class^="style_clickable__"]:hover {' +
    'background: #284860 !important;' +
    '}'
  );
  GM_addStyle(
    '[class^="Sidebar_container"] [class^="style_selected__"][class*="style_container_selected__"]:hover {' +
    'background: #264b79 !important;' +
    '}'
  );
})();
