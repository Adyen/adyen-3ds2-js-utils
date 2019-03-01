/**
 * @function createForm
 *
 * @desc Generic function for creating a form element with a target attribute
 *
 * @param name {String} - the name of the form element
 * @param action {String} - the action for the form element
 * @param target {String} - the target for the form element (specifies where the submitted result will open i.e. an iframe)
 * @param inputName {String} - the name of the input element holding the base64Url encoded JSON
 * @param inputValue {String} - the base64Url encoded JSON
 *
 * @returns {Element} - Created form element
 */
const createForm = (name, action, target, inputName, inputValue) => {

    if (!name || !action || !target || !inputName || !inputValue) {
        throw new Error('Not all required parameters provided for form creation');
    }

    if (name.length === 0 || action.length === 0 || target.length === 0 || inputName.length === 0 || inputValue.length === 0) {
        throw new Error('Not all required parameters have suitable values');
    }

    const form = document.createElement( 'form' );
    form.style.display = 'none';
    form.name = name;
    form.action = action;
    form.method = "POST";
    form.target = target;
    const input = document.createElement( 'input' );
    input.name = inputName;
    input.value = inputValue;
    form.appendChild( input );
    return form;
};

export default createForm;
