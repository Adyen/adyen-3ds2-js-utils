import createIframe from './index';

const mockCallback = jest.fn();

describe('creating an iframe ', () => {
    test('should attach to the body', () => {
        expect( () => {
            createIframe(false , 'name', 'no-id', '12', '12', mockCallback).reject.toEqual('');
        });
    });
});
