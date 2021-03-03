/**
 * @function encodeBase64URL
 *
 * @desc Takes a string and encodes it as a base64url string
 * (https://en.wikipedia.org/wiki/Base64#URL_applications)
 * (See also https://tools.ietf.org/html/rfc7515)
 *
 * @example const jsonStr = JSON.stringify( {name:'john', surname:'smith'} );
 *          const base64url = base64URL.encode(jsonStr);
 *
 * @param dataStr {String} - data, as a string, to be encoded
 *
 * @returns base64url {String} : a base64url encoded string
 */
var encodeBase64URL = function encodeBase64URL(dataStr) {
    var base64 = window.btoa(dataStr);
    var base64url = base64.split('=')[0]; // Remove any trailing '='s

    base64url = base64url.replace(/\+/g, '-'); // 62nd char of encoding

    base64url = base64url.replace(/\//g, '_'); // 63rd char of encoding

    return base64url;
};

/**
 * @function decodeBase64URL
 *
 * @desc Takes a base64url encoded string and decodes it to a regular string
 * (See also https://tools.ietf.org/html/rfc7515)
 *
 * @example const dataStr = base64URL.decode(base64url)
 *          const decodedObj = JSON.parse(dataStr);
 *
 * @param str {String} - base64url encoded string
 *
 * @returns {String} - a regular string
 */
var decodeBase64URL = function decodeBase64URL(str) {
    var base64 = str;
    base64 = base64.replace(/-/g, '+'); // 62nd char of encoding

    base64 = base64.replace(/_/g, '/'); // 63rd char of encoding

    switch (base64.length % 4) {
        // Pad with trailing '='s
        case 0:
            break;
        // No pad chars in this case

        case 2:
            base64 += "==";
            break;
        // Two pad chars

        case 3:
            base64 += "=";
            break;
        // One pad char

        default:
            if (window.console && window.console.log) {
                window.console.log('### base64url::decodeBase64URL::  Illegal base64url string!');
            }

    }

    try {
        return window.atob(base64);
    } catch (e) {
        throw new Error(e);
    }
};

var base64URL = {
    encode: encodeBase64URL,
    decode: decodeBase64URL
};

export default base64URL;
