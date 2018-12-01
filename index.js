
/**
 * Returns milliseconds from string ff time, '1 20 5' - means one hour, 20 minutes, 5 seconds
 * @param str
 */
function strToMs( str ){
    let reversed = str.split(' ').reverse();
    return reversed[0] * 1000 + ( !!reversed[1] ? reversed[1] * 1000 * 60 : 0 ) + ( !!reversed[2] ? reversed[2] * 1000 * 60 * 60 : 0 );
}

/**
 * Returns hours:minutes:seconds
 * @param duration
 * @returns {string}
 */
function msToTime(duration) {
    const seconds = parseInt((duration / 1000) % 60);
    const minutes = parseInt((duration / (1000 * 60)) % 60);
    const hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    return `${hours != 0 ? hours + 'h ' : ''}${minutes != 0 ? minutes + 'm ' : ''}${hours > 0 ? '' : seconds + 's'}`;
}

/**
 * Returns formatted current date
 * @returns {string}
 */
function getCurrentTime( onlyTime = false ){
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    if( onlyTime ) {
        datetime = currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
    }

    return datetime;
}

/**
 * Log to console and to file (TBD)
 * @param msg
 * @param type
 * @param prefix
 * @param postfix
 */
function log( msg, type='info', prefix='', postfix='' ){
    switch( type ){
        case 'warning':
            console.log( `${prefix}[WARNING] ${getCurrentTime()}\t| ${msg}${postfix}` );
            // logToFile(`${prefix}[WARNING] ${getCurrentTime()}\t| ${msg}${postfix}`);
            break;
        case 'error':
            console.log( `${prefix}[ERROR] ${getCurrentTime()}\t| ${msg}${postfix}` );
            // logToFile(`${prefix}[ERROR] ${getCurrentTime()}\t| ${msg}${postfix}`);
            break;
        case 'debug':
            // logToFile( `${prefix}[DEBUG] ${getCurrentTime()}\t| ${msg}${postfix}` );
            break;
        default:
            console.log( `${prefix}[INFO] ${getCurrentTime()}\t| ${msg}${postfix}` );
            // logToFile( `${prefix}[INFO] ${getCurrentTime()}\t| ${msg}${postfix}` );
            break;
    }
}

module.exports.msToTime = msToTime;
module.exports.strToMs = strToMs;
module.exports.log = log;