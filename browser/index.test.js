import collectBrowserInfo from './index';

describe('retrieving browser info from browser should', () => {

    test('match expected elements', () => {
        expect(collectBrowserInfo()).toMatchObject({
            colorDepth: expect.any(Number),
            javaEnabled: expect.any(Boolean),
            language: expect.any(String),
            screenHeight: expect.any(Number),
            screenWidth: expect.any(Number),
            timeZoneOffset: expect.any(Number),
            userAgent: expect.any(String)
        });
    });
});
