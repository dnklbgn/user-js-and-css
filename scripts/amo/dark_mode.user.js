// ==UserScript==
// @name        amo messenger dark mode
// @namespace   https://github.com/dnklhtbgn/js-user-scripts
// @version     0.6.0
// @description Добавляем темную тему в мессенджер amo
// @author      dnklhtbgn
// @downloadURL https://github.com/dnklhtbgn/user-js-and-css/raw/master/scripts/amo/dark_mode.user.js
// @updateURL   https://github.com/dnklhtbgn/user-js-and-css/raw/master/scripts/amo/dark_mode.user.js
// @grant       GM_addStyle
// @match       *://web.amo.tm/*
// ==/UserScript==

(function () {
  // Какой-то загадочный прикол, не удается задать стили для нескольких селекторов в одном вызове GM_addStyle,
  // поэтому для каждого из селекторов вызываем функцию по новой.
  // Большая часть используемых цветов была сворована с темной темы amoCRM,
  // но в какой-то момент цвета закончились, и пришлось придумывать свои:(
  GM_addStyle(':root { --userBlockTitleColor: #f2f2f2; --userBlockSubtitleColor: #8092ad; }');
  GM_addStyle('body, [class^="ForwardModal_divider__"] { background-color: #284860; }');
  GM_addStyle('#app > div:first-child { background-color: #07131d; }');
  GM_addStyle(
    '[class^="Sidebar_container"], [class^="ConversationHeader_header__"], [class^="ConversationHeader_connection__"], [class^="Tab_tab_content_wrapper"], [class^="style_search_container"] label:first-child, [class^="RegularMessage_message__"], [class^="MainInput_container__"], [class^="ForwardModal_header__"], [class^="ForwardModal_controls__"], [class^="style_checkmark_border__"], [class^="MainInput_container__"] ._scrollbar.baron__clipper, [class^="ConversationRoute_compose__"], [class*="BaseEditableAddAction_container_dark__"], [class^="RegularMessage_message__"] [class*="reactions-list_reaction_chip__"], [class*="ReactionsInfoModal_container__"] {' +
    'background: #153043;' +
    '}'
  );
  GM_addStyle('[class^="ConversationHeader_header"], [class^="ReactionsInfoModal_scrollTabs__"] {' +
    'border-color: #284860;' +
    '}'
  );
  GM_addStyle('[class^="Sidebar_container"] [class^="style_selected__"][class*="style_container_selected__"] {' +
    'background: #163f5f !important;' +
    '}'
  );
  GM_addStyle('[class^="style_modal_drawer"] { background: #102535; }');
  GM_addStyle('[class^="ConversationRoute_container__"] > div:nth-child(3) {' +
    'background-image: url(https://raw.githubusercontent.com/dnklhtbgn/user-js-and-css/master/images/amo/dark_mode_background_pattern.png);' +
    '}'
  );
  GM_addStyle(
    '[class*="RegularMessage_is_outgoing__"] [class^="RegularMessage_message__"], [class*="RegularMessage_is_outgoing__"] [class^="RegularMessage_message__"] [class*="reactions-list_reaction_chip__"] {' +
    'background: #264b79;' +
    '}');
  GM_addStyle('[class*="RegularMessage_is_outgoing__"][class*="RegularMessage_is_normalized__"] [class^="RegularMessage_message__"], [class*="RegularMessage_is_outgoing__"][class*="RegularMessage_is_normalized__"] [class^="RegularMessage_message__"] [class*="reactions-list_reaction_chip__"] {' +
    'background: #507ba3;' +
    '}'
  );
  GM_addStyle(
    '[class*="RegularMessage_is_outgoing__"][class*="RegularMessage_highlighted__"] [class^="RegularMessage_message__"], [class*="RegularMessage_is_outgoing__"][class*="RegularMessage_highlighted__"] [class^="RegularMessage_message__"] [class*="reactions-list_reaction_chip__"] {' +
    '-webkit-animation-name: RegularMessage_select-background-outgoing;' +
    'animation-name: RegularMessage_select-background-outgoing;' +
    '}'
  );
  GM_addStyle(
    '[class*="RegularMessage_is_normalized__"] [class^="RegularMessage_message__"], [class*="RegularMessage_is_normalized__"] [class^="RegularMessage_message__"] [class*="reactions-list_reaction_chip__"] {' +
    'background: #3f6680;' +
    '}'
  );
  GM_addStyle(
    '[class*="RegularMessage_highlighted__"] [class^="RegularMessage_message__"], [class*="RegularMessage_highlighted__"] [class^="RegularMessage_message__"] [class*="reactions-list_reaction_chip__"] {' +
    '-webkit-animation-name: RegularMessage_select-background;' +
    'animation-name: RegularMessage_select-background;' +
    '}'
  );
  GM_addStyle(
    '[class*="RegularMessage_is_outgoing__"] [class^="RegularMessage_message__"] [class^="MessageDeliveryStatus_container__"] {' +
    'color: #bcbcbc;' +
    '}'
  );
  GM_addStyle(
    '[class*="MessageDeliveryStatus_status_read__"] {' +
    'fill: #24bc61;' +
    '}'
  );
  GM_addStyle(
    '[class^="RegularMessage_message__"], [class^="ForwardMessage_container__"], [class^="ReferenceMessage_container__"], [class^="FeedTextarea_editable__"], [class*="style_search_input__"], [class*="style_subtitle_light__"], [class^="SearchMessages_title__"], [class^="Notification_title__"], [class^="UserMentionItem_container__"], [class^="TabCaption_name__"], [class^="FolderView_container__"] [class^="style_header__"], [class^="ConversationTitle_rpa_request_name_wrapper__"], [class^="style_transcription_text__"], [class^="MessageMediaItem_media__title__"], [class*="ReactionsInfoModal_userItem_info__"] {' +
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
    '[class*="RegularMessage_is_selected__"] [class^="RegularMessage_message__"], [class*="RegularMessage_is_selected__"] [class^="RegularMessage_message__"] [class*="reactions-list_reaction_chip__"] {' +
    'background: #3f6680;' +
    '}'
  );
  GM_addStyle(
    '[class*="RegularMessage_is_selected__"][class*="RegularMessage_is_outgoing__"] [class^="RegularMessage_message__"], [class*="RegularMessage_is_selected__"][class*="RegularMessage_is_outgoing__"] [class^="RegularMessage_message__"] [class*="reactions-list_reaction_chip__"] {' +
    'background: #507ba3;' +
    '}'
  );
  GM_addStyle(
    '[class*="TabCaption_caption__"] {' +
    'background: linear-gradient(360deg, #153043 43.42%, #163f5f 100%) !important;' +
    '}'
  );
  GM_addStyle(
    '[class*="MessageTitle_user__"], [class^="ServiceMessage_container__"] [class^="UserLink_user_link__"], [class^="ServiceMessage_container__"], [class^="ForwardModal_header__"], [class^="BaseEditableAddAction_placeholder__"], [class*="BaseEditableAddAction_container_dark__"], [class^="Document_name__"], [class^="ReactionsInfoModal_header_in__"], [class^="ConversationHeader_connection_troubles__"] {' +
    'color: #8092ad;' +
    '}'
  );
  GM_addStyle('[class^="BaseEditableAddAction_avatar_component_base__"] { fill: #8092ad; }')
  GM_addStyle(
    '[class^="Sidebar_container"] [class^="style_clickable__"]:hover, [class^="Sidebar_container"] span[role="link"]:hover, [class^="MessagePhotoMedia_photo_media_container__"], [class*="UserMentionItem_container_selected__"] {' +
    'background: #284860 !important;' +
    '}'
  );
  GM_addStyle(
    '[class^="Sidebar_container"] [class^="style_selected__"][class*="style_container_selected__"]:hover {' +
    'background: #264b79 !important;' +
    '}'
  );
  GM_addStyle(
    '[class^="MainInput_reference_message__"] [class^="ReferenceMessage_container__"] {' +
    'background-color: rgba(84, 160, 215, .1);' +
    '}'
  );
  GM_addStyle(
    '[class^="Sidebar_scroller_wrapper__"], [class*="TabCaption_caption__"], [class^="MainInput_container__"] ._scrollbar.baron__clipper {' +
    'border-color: #284860 !important;' +
    '}'
  );
  GM_addStyle(
    '[class^="style_tab__"] {' +
    'border-right: 1px solid #284860;' +
    'color: #f2f2f2;' +
    '}'
  );
  GM_addStyle(
    '[class^="style_tab__"][class*="style_selected__"] {' +
    'color: #2a9afd;' + // Не более чем тупой запил для того, чтобы один стиль темной темы не сносил другой
    '}'
  );
  GM_addStyle('[class^="style_tabs__"]:after { background: #284860; }');
  GM_addStyle(
    '[class^="MessageItem_unread_messages_separator__"], [class*="style_date_separator_item__"] span {' +
    'background: rgba(40, 72, 96);' +
    'color: #8092ad;' +
    '}'
  );
  GM_addStyle(
    '@-webkit-keyframes RegularMessage_select-background-outgoing {' +
    '0% {' +
    'background: #507ba3;' +
    '}' +
    '50% {' +
    'background: #8bb3cf;' +
    '}' +
    'to {' +
    'background: #507ba3;' +
    '}' +
    '}'
  );
  GM_addStyle(
    '@keyframes RegularMessage_select-background-outgoing {' +
    '0% {' +
    'background: #507ba3;' +
    '}' +
    '50% {' +
    'background: #8bb3cf;' +
    '}' +
    'to {' +
    'background: #507ba3;' +
    '}' +
    '}'
  );
  GM_addStyle(
    '@-webkit-keyframes RegularMessage_select-background {' +
    '0% {' +
    'background: #3f6680;' +
    '}' +
    '50% {' +
    'background: #7fa6bd;' +
    '}' +
    'to {' +
    'background: #3f6680;' +
    '}' +
    '}'
  );
  GM_addStyle(
    '@keyframes RegularMessage_select-background {' +
    '0% {' +
    'background: #3f6680;' +
    '}' +
    '50% {' +
    'background: #7fa6bd;' +
    '}' +
    'to {' +
    'background: #3f6680;' +
    '}' +
    '}'
  );
  GM_addStyle(
    '[class^="reactions-chip_member_avatar_item__"] {' +
    'border-color: rgba(0, 0, 0, 0);' +
    '}'
  );
  GM_addStyle(
    '[class^="reaction-chip-base_chip__"] {' +
    '--chip-background: rgba(101, 170, 219, 0.3);' +
    'color: #e3e0d6;' +
    '}'
  );
  GM_addStyle(
    '[class^="reaction-chip-base_chip__"][class*="reaction-chip-base_chip_for_outgoing__"] {' +
    '--chip-background: rgba(110, 174, 221, 0.3);' +
    '}'
  );
  GM_addStyle(
    '[class*="reaction-chip-base_chip_active__"], [class*="reaction-chip-base_chip_active__"][class*="reaction-chip-base_chip_for_outgoing__"] {' +
    '--chip-background: rgba(36, 188, 97, 0.3);' +
    '}'
  );
  GM_addStyle(
    '[class^="reaction-chip-base_chip__"]:not(:disabled):hover {' +
    '--chip-background: rgba(101, 170, 219, 0.5);' +
    'color: #e3e0d6;' +
    '}'
  );
  GM_addStyle(
    '[class^="reaction-chip-base_chip__"][class*="reaction-chip-base_chip_for_outgoing__"]:not(:disabled):hover {' +
    '--chip-background: rgba(110, 174, 221, 0.5);' +
    '}'
  );
  GM_addStyle(
    '[class*="reaction-chip-base_chip_active__"]:not(:disabled):hover, [class*="reaction-chip-base_chip_active__"][class*="reaction-chip-base_chip_for_outgoing__"]:not(:disabled):hover {' +
    '--chip-background: rgba(36, 188, 97, 0.5);' +
    '}'
  );
  GM_addStyle(
    '[class^="ReactionsInfoModal_header__"] {' +
    'background: #163f5f;' +
    '}'
  );
  GM_addStyle(
    '[class^="reaction-direct_container__"] {' +
    'background: #2d5570;' +
    'border-color: #3f6680;' +
    '}'
  );
  GM_addStyle(
    '[class*="reaction-direct_outgoing__"]:hover {' +
    'background: #3e6c8f;' +
    'border-color: #7fa6bd;' +
    '}'
  );
  GM_addStyle(
    '[class^="ConversationHeader_loader__"] [class^="Loader_loader__"] div:after {' +
    'background: #8092ad;' +
    '}'
  );
})();
