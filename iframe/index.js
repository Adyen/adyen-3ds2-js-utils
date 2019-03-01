const configObject = {};
configObject.container = void 0;

const addIframeListener = (iframe, callback) => {
    if (iframe.attachEvent){
        // IE fallback
        iframe.attachEvent("onload", function(){
            if (callback && typeof callback === "function") {
                callback(iframe.contentWindow);
            }
        });
    } else {
        iframe.onload = function(){
            if (callback && typeof callback === "function") {
                callback(iframe.contentWindow);
            }
        };
    }
};

/**
 * @function createIframe
 *
 * @desc Generic function for creating an iframe element with onload listener and adding iframe to passed container element
 *
 * @param container {HTMLElement} - the container to place the iframe onto, defaults to document body
 * @param name {String} - the name for the iframe element
 * @param width {String} - the width of the iframe, defaults to 0
 * @param height {String} - the height of the iframe, defaults to 0
 * @param callback { Function } - optional, the callback to fire after the iframe loaded content
 *
 * @returns {Element} - Created iframe element
 */
const createIframe = (container, name, width = '0', height = '0', callback) => {
    if (!name || name.length === 0){
        throw new Error('Name parameter missing for iframe');
    }

    // Resolve holding element for generated iframe else default to body
    if (container instanceof HTMLElement) {
        configObject.container = container;
    } else {
        configObject.container = document.body;
    }

    const iframe = document.createElement('iframe');

    iframe.classList.add(name + 'Class');
    iframe.width = width;
    iframe.height = height;
    iframe.name = name;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('border', '0');

    const noIframeElContent = document.createTextNode('<p>Your browser does not support iframes.</p>');
    iframe.appendChild(noIframeElContent);

    configObject.container.appendChild(iframe);

    addIframeListener(iframe, callback);

    return iframe;
};

export default createIframe;
