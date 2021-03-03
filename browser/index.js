/**
 * @function collectBrowserInfo
 *
 * @desc Collects available frontend browser info and store it in the properties dictated by the EMVCo spec
 * (3DS_Spec_protocolAndCoreFny_v2-1_Oct2017.pdf)
 *
 * @example const browserInfo = collectBrowserInfo();
 * const userAgent = browserInfo.userAgent;
 *
 * @returns {Object} - browserInfo an object containing the retrieved browser properties
 */
var collectBrowserInfo = function collectBrowserInfo() {
    var screenWidth = window && window.screen ? window.screen.width : '';
    var screenHeight = window && window.screen ? window.screen.height : '';
    var colorDepth = window && window.screen ? window.screen.colorDepth : '';
    var userAgent = window && window.navigator ? window.navigator.userAgent : '';
    var javaEnabled = window && window.navigator ? navigator.javaEnabled() : false;
    var language = '';

    if (window && window.navigator) {
        language = window.navigator.language ? window.navigator.language : window.navigator.browserLanguage; // Else is for IE <+ 10
    }

    var d = new Date();
    var timeZoneOffset = d.getTimezoneOffset();
    var browserInfo = {
        screenWidth: screenWidth,
        screenHeight: screenHeight,
        colorDepth: colorDepth,
        userAgent: userAgent,
        timeZoneOffset: timeZoneOffset,
        language: language,
        javaEnabled: javaEnabled
    };
    return browserInfo;
};

export default collectBrowserInfo;