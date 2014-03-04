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

// Temporary configuration solution
// Comments explain which property hides what
// Set this property to true to hide it, false to display it
var to_hide = {
    // Hide 'favorites'
    '#pinnedNav': true,

    // Hide 'groups'
    '#groupsNav': true,

    // Hide 'apps'
    '#appsNav': true,

    // Hide 'friends'
    '#listsNav': true,

    // Hide 'pages'
    '#pagesNav': true,

    // Hide upper left profile link
    '#pagelet_welcome_box': true,

    // Hide birthdays
    '#birthday_reminders_link': true,

    // Hide events
    '#event_reminders_link': true,

    // Hide application requests
    '#custom_reminders_link': true,

    // Hide copyright footer
    '#pagelet_rhc_footer': true,

    // Hide recommended pages
    '#pagelet_ego_pane': true,
};

for (var id in to_hide) {
    if (to_hide[id]) {
        $(id).hide();
    }
}