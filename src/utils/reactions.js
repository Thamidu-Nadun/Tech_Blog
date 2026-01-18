export const REACTION_TYPE = {
    LOVE: 'love',
    FIRE: 'fire',
    MIND_BLOWN: 'mindBlown',
    CONGRATS: 'congrats',
    THUMBS_DOWN: 'thumbsDown',
    THUMBS_UP: 'thumbsUp',
};


/**
 * @typedef {Object} REACTION
 * @property {Number} id | index/unique number
 * @property {String} label | alternative name for the reaction item
 * @property {String} file | public path to the lottie file
 */

/**
 * @type {REACTION[]}
 */
const REACTIONS = [
    { id: 1, label: REACTION_TYPE.LOVE, file: '/animations/lottie/love2.lottie' },
    { id: 2, label: REACTION_TYPE.FIRE, file: '/animations/lottie/fire.lottie' },
    { id: 3, label: REACTION_TYPE.MIND_BLOWN, file: '/animations/lottie/mind-blown.lottie' },
    { id: 4, label: REACTION_TYPE.CONGRATS, file: '/animations/lottie/party.lottie' },
    { id: 5, label: REACTION_TYPE.THUMBS_DOWN, file: '/animations/lottie/thumbs-down.lottie' },
];


export default REACTIONS;