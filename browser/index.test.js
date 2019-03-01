import collectBrowserInfo from './index';

describe('retrieving browser info from browser should', () => {

    test('match expected elements', () => {
        expect(collectBrowserInfo()).toMatchObject({
            browserColorDepth: expect.any(Number),
            browserJavaEnabled: expect.any(Boolean),
            browserLanguage: expect.any(String),
            browserScreenHeight: expect.any(Number),
            browserScreenWidth: expect.any(Number),
            browserTZ: expect.any(Number),
            browserUserAgent: expect.any(String)
        });
    });
});
