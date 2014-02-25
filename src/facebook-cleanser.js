// ==UserScript==
// @name       Facebook Cleanser
// @namespace  http://github.com/stefan-brus/facebook-cleanser
// @version    0.1
// @description  Removes unwanted elements from facebook
// @match      https://www.facebook.com/
// @copyright  2014, Stefan Brus
//
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// ==/UserScript==

// Hide 'favorites'
$('#pinnedNav').hide();

// Hide 'groups'
$('#groupsNav').hide();

// Hide 'apps'
$('#appsNav').hide();

// Hide 'friends'
$('#listsNav').hide();

// Hide 'pages'
$('#pagesNav').hide();

// Hide upper left profile link
$('#pagelet_welcome_box').hide();

// Hide birthdays
$('#birthday_reminders_link').hide();

// Hide events
$('#event_reminders_link').hide();

// Hide copyright footer
$('#pagelet_rhc_footer').hide();

// Hide recommended pages
$('#pagelet_ego_pane').hide();