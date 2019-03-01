# 3DS 2.0 JavaScript utilities

These utilities are helper functions to get 3DS 2.0 integrated on to your webpage.

## Requirements
3DS 2.0 Back-end integration with Adyen:  https://docs.adyen.com/developers/risk-management/3d-secure-2/browser-based-integration/

## Installation

#### Option A: Clone the repo and import functions directly through UMD / ES2015
```javascript
import collectBrowserInfo from "./browser";
import base64Url from "./base64url";
import createIframe from "./iframe";
import createForm from "./form";
import config from "./config.js";
```

#### Option B: Build the file, link to it and use ThreeDS2Utils on the global scope

Install the development dependencies:
```terminal
npm install
```
Build the file:
```terminal
npm run build
```

Embed it on your page:
```
<script type="text/javascript" src="YOUR_PATH/threeds2-js-utils.js">
```
Functionality can then be accessed via:
```javascript
window.ThreedDS2Utils
```
e.g.
```javascript
window.ThreedDS2Utils.collectBrowserInfo()
```

## Usage

N.B. The following code snippets are based on installation via Approach 1:

### Gathering browser information

Collects available frontend browser info and store it in the properties dictated by EMVCo specification.
[EMV® 3-D Secure Protocol and Core Functions Specification](https://www.emvco.com/emv-technologies/3d-secure/)

```javascript
/**
 * @function collectBrowserInfo
 * @returns {Object} - browserInfo an object containing the retrieved browser properties
 */
const browserInfo = collectBrowserInfo();
```
This returns an object with the following keys:
```javascript
{
    screenWidth,
    screenHeight,
    colorDepth,
    userAgent,
    timeZoneOffset,
    language,
    javaEnabled
}
```

### Base64Url encoding and decoding
```javascript
base64Url.encode
```
returns a base64URL encoded string
```javascript
base64Url.decode
``` 
returns a base64URL decoded string

```javascript
/**
 * @function base64Url
 * @param { String } - string to be encoded/decoded
 * @returns {String} - a regular string
 */
const base64URLencodedString = base64Url.encode('STRING');
const base64URLdecodedString = base64Url.decode('ENCODED_STRING')
```

### Creating an iframe
Creates an ```iframe``` of specified size element with an ```onload``` listener and adds the ```iframe``` to the passed container element

```javascript
/**
 * @function createIframe
 * @param container {HTMLElement} - the container to place the iframe into, defaults to document body
 * @param name {String} - the name for the iframe element
 * @param width {String} - the width of the iframe, defaults to 0
 * @param height {String} - the height of the iframe, defaults to 0
 * @param callback { Function } - optional, the callback to fire after the iframe loads content
 *
 * @returns {Element} - Created iframe element
 */
const iframe = createIframe(
    container, 
    'IFRAME_NAME', 
    '400', 
    '600'
);
```

### Creating a form
Creates a ```form``` element with a ```target``` attribute
```javascript
/**
 * @function createForm
 * @param name {String} - the name of the form element
 * @param action {String} - the action for the form element
 * @param target {String} - the target for the form element (specifies where the submitted result will open i.e. an iframe)
 * @param inputName {String} - the name of the input element holding the base64Url encoded JSON
 * @param inputValue {String} - the base64Url encoded JSON
 *
 * @returns {Element} - Created form element
 */

const form = createForm(
    'FORM_ELEMENT NAME', 
    "FORM_ACTION", 
    "TARGET_NAME", 
    "INPUT_ELEMENT_NAME", 
    "DATA_TO_POST");
```

### Validating and retrieving challenge window sizes
```javascript
config.validateChallengeWindowSize

```
ensures that the passed string is one of values that the ACS expects, else returns ```'01'```

```javascript
config.getChallengeWindowSize
```
returns an array of pixel values based on the validated challenge window size e.g. ```['250px', '400px']```

```javascript
/**
 * @function config.validateChallengeWindowSize 
 * @param sizeStr - a size string to confirm as valid
 * @returns {String} - a valid size string
 */
const validWindowSize = config.validateChallengeWindowSize('STRING');
```
```javascript
/**
 * @function config.getChallengeWindowSize 
 * @param sizeStr - a size string to confirm as valid
 * @returns {array} - an array of values [WIDTH, HEIGHT]
 */
const windowSizesArray = config.getChallengeWindowSize('STRING');
```

## Documentation
[3DS 2.0 Helper Functions Implementation](https://docs.adyen.com/developers/risk-management/3d-secure-2/browser-based-integration/3d-secure-2-helper-functions "Documentation")

## Support
You can open tickets for any issues with the helper functions. In case of specific problems with your account or generic 3DS 2.0 issues and questions, please contact
support@adyen.com.

## License
MIT license. For more information, see the LICENSE file.
