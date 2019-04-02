export const THREEDS_METHOD_TIMEOUT = 10000;
export const CHALLENGE_TIMEOUT = 600000;

// Re. EMV 3-D Specification: EMVCo_3DS_Spec_210_1017.pdf
export const challengeWindowSizes = {
    '01': ['250px', '400px'],
    '02': ['390px', '400px'],
    '03': ['500px', '600px'],
    '04': ['600px', '400px'],
    '05': ['100%', '100%']
};

/**
 * @desc Accepts a size string for the challenge window & returns it if it is valid else returns a default value
 * @param sizeStr - the size string to check the validity of
 * @returns {string} - a valid size string
 */
export function validateChallengeWindowSize(sizeStr){
    let sizeString = (sizeStr.length === 1)? `0${sizeStr}` : sizeStr;
    return (challengeWindowSizes.hasOwnProperty(sizeString)) ? sizeString : '01';
}

/**
 * @desc Accepts a size string for the challenge window & returns the corresponding array of w/h values
 * @param sizeStr
 * @returns {*}
 */
export function getChallengeWindowSize(sizeStr){
    return challengeWindowSizes[ validateChallengeWindowSize(sizeStr) ];
}

const config = {
    challengeWindowSizes,
    validateChallengeWindowSize,
    getChallengeWindowSize,
    THREEDS_METHOD_TIMEOUT,
    CHALLENGE_TIMEOUT
};

export default config;