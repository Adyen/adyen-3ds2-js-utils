import base64URL from './index';

describe('base64 URL encoding', () => {
    describe('base64URL.encode', () => {
        test('encodes any URL', () => {
            expect(base64URL.encode("https://www.google.com?!5151290##!!515")).toBe('aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbT8hNTE1MTI5MCMjISE1MTU');
            expect(base64URL.encode("gibber      ish")).toBe('Z2liYmVyICAgICAgaXNo');
        });
    });
});

describe('base64 URL decoding', () => {
    describe('base64URL.decode', () => {
        test('decodes a base64 encoded URL', () => {

            window.log3dssdk = true;
            expect(base64URL.decode("aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbT8hNTE1MTI5MCMjISE1MTU")).toBe('https://www.google.com?!5151290##!!515');
            expect(() => {
                base64URL.decode('gibberish');
            }).toThrow();
        });
    });
});
