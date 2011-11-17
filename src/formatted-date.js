/*
 * formatted-date 0.0.1
 * (c) 2011 Teren Teh <teren@tixocloud.com>
 * MIT License
 * 
 * Given a Date object, returns a string representing the date and time
 * as specified by the format string.
 *
 */
var formattedDate = (function() {
    var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    var abbrevMonths = [
        'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
    ];
})();

Date.prototype.strftime = function( formatString, locale ) {
    var formattedDate = '';
    var stringRemainder = formatString;
    var formatChar = '';
    var nextDirective = 0;

    // Defaults to English locale
    if (locale === null) {
        locale = 'en-us';
    }

    // Parse the format string
    // Split the format string and place all characters into an array
    // For every character in the array, append to formattedDate
    while ( stringRemainder.length !== 0 ) {
        formatChar =  
        stringRemainder = 
        switch( formatChar ) {
            case '%a':
                break;
            case '%A':
                break;
            case '%b':
                break;
            case '%B':
                break;
            case '%c':
                break;
            case '%d':
                break;
            case '%f':
                break;
            case '%H':
                break;
            case '%I':
                break;
            case '%j':
                break;
            case '%m':
                break;
            case '%M':
                break;
            case '%p':
                break;
            case '%S':
                break;
            case '%U':
                break;
            case '%w':
                break;
            case '%W':
                break;
            case '%x':
                break;
            case '%X':
                break;
            case '%y':
                break;
            case '%Y':
                break;
            case '%z':
                break;
            case '%Z':
                break;
            case '%%':
                break;
            default:
                // Do nothing
        } // End switch
    } 
}
