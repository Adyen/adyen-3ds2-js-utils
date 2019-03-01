import config from "./index";

describe('config', () => {
    describe('validateChallengeWindowSize', () => {
        test('Validates a valid size', () => {

            expect(config.validateChallengeWindowSize('05')).toBe('05');
            expect(config.validateChallengeWindowSize('03')).toBe('03');
        });

        test('Returns 01 on an invalid size', () => {
            expect(config.validateChallengeWindowSize('42')).toBe('01');
            expect(config.validateChallengeWindowSize(true)).toBe('01');
            expect(config.validateChallengeWindowSize('lol')).toBe('01');
        });
    });

    describe('getChallengeWindowSizes', () => {
        test('getting sizes with invalid string', () => {

            const size01 = ['250px', '400px'];
            expect(config.getChallengeWindowSize(41)).toEqual(size01);
            expect(config.getChallengeWindowSize('test')).toEqual(size01);
            expect(config.getChallengeWindowSize(true)).toEqual(size01);
            expect(config.getChallengeWindowSize(false)).toEqual(size01);
        });

        test('getting sizes with valid string', () => {
            const size01 = ['250px', '400px'];
            const size05 = ['100%', '100%'];
            expect(config.getChallengeWindowSize('01')).toEqual(size01);
            expect(config.getChallengeWindowSize('05')).toEqual(size05);
        });
    });
});

