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
    { id: 1, label: 'love', file: '/animations/lottie/love2.lottie' },
    { id: 2, label: 'fire', file: '/animations/lottie/fire.lottie' },
    { id: 3, label: 'mind blowing', file: '/animations/lottie/mind-blown.lottie' },
    { id: 4, label: 'congrats', file: '/animations/lottie/party.lottie' },
    { id: 5, label: 'dislike', file: '/animations/lottie/thumbs-down.lottie' },
];

export default REACTIONS;