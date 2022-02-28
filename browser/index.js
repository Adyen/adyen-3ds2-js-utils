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
const collectBrowserInfo = () => {

    const screenWidth = window && window.screen ? window.screen.width : '';
    const screenHeight = window && window.screen ? window.screen.height : '';
    const colorDepth = window && window.screen ? window.screen.colorDepth : '';
    const userAgent = window && window.navigator ? window.navigator.userAgent : '';
    const javaEnabled = window && window.navigator ? navigator.javaEnabled() : false;

    let language = '';
    if (window && window.navigator) {
        language = window.navigator.language
            ? window.navigator.language
            : window.navigator.browserLanguage; // Else is for IE <+ 10
    }

    const d = new Date();
    const timeZoneOffset = d.getTimezoneOffset();

    const browserInfo = {
        acceptHeader: '*/*',
        screenWidth,
        screenHeight,
        colorDepth,
        userAgent,
        timeZoneOffset,
        language,
        javaEnabled,
    };

    return browserInfo;
};

export default collectBrowserInfo;