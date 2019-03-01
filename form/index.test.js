import createForm from './index';

const validFormInput = {
    "name" : "test",
    "action" : "action",
    "target" : "targetURL",
    "inputName" : "inputName",
    "inputValue" : "inputValue"
};

describe('Checking if type is object', () => {
    describe('with ', () => {
        test('a valid input should return true', () => {
            expect(typeof(createForm(validFormInput.name, validFormInput.action, validFormInput.target, validFormInput.inputName, validFormInput.inputValue)))
                .toBe('object');

            expect((createForm(validFormInput.name, validFormInput.action, validFormInput.target, validFormInput.inputName, validFormInput.inputValue)).attributes.getNamedItem('name').value)
                .toEqual('test');

            expect((createForm(validFormInput.name, validFormInput.action, validFormInput.target, validFormInput.inputName, validFormInput.inputValue)).attributes.getNamedItem('action').value)
                .toEqual('action');
        });

        test('an invalid input (not all expected values are there', () => {
            expect(() => {
                createForm();
            }).toThrow();


            expect(() => {
                createForm(validFormInput.name, validFormInput.action, validFormInput.target, validFormInput.inputName);
            }).toThrow();

        });
    });
});
