const collectBrowserInfo = () => {

    const browserScreenWidth = window && window.screen ? window.screen.width : '';
    const browserScreenHeight = window && window.screen ? window.screen.height : '';
    const browserColorDepth = window && window.screen ? window.screen.colorDepth : '';
    const browserUserAgent = window && window.navigator ? window.navigator.userAgent : '';
    const browserJavaEnabled = window && window.navigator ? navigator.javaEnabled() : false;

    let browserLanguage = '';
    if (window && window.navigator) {
        browserLanguage = window.navigator.language
            ? window.navigator.language
            : window.navigator.browserLanguage; // Else is for IE <+ 10
    }

    const d = new Date();
    const browserTZ = d.getTimezoneOffset();

    const browserInfo = {
        browserScreenWidth,
        browserScreenHeight,
        browserColorDepth,
        browserUserAgent,
        browserTZ,
        browserLanguage,
        browserJavaEnabled,
    };

    return browserInfo;
};

export default collectBrowserInfo;