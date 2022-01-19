/**
 * I assume:
 * 1. newsPaper always exists and could be empty
 * 2. wordCloud always exist and could be empty
 *
 * Why?
 * I think this solution is better because here we are doing just
 * one loop per array, instead of: wordCloud.indexOf(newsWord)
 *
 * @param {string[]} newsPaper
 * @param {string[]} wordCloud
 * @returns {boolean}
 */
const canMakeWordCloud = (newsPaper, wordCloud) => {
    const wordMap = new Map();
    for (const word of newsPaper) {
        let counter = 1;
        if (wordMap.has(word)) {
            counter = wordMap.get(word) + 1;
        }
        wordMap.set(word, counter);
    }

    for (const word of wordCloud) {
        if (wordMap.has(word)) {
            const counter = wordMap.get(word) - 1;
            if (counter === 0) {
                wordMap.delete(word);
            } else {
                wordMap.set(word, counter);
            }
        } else {
            return false;
        }
    }

    return true;
};

console.log('TESTING');
console.log('Must be FALSE =>', canMakeWordCloud(['my', 'city', 'rules', 'car', 'boat'], ['my', 'city', 'drools'])); // false
console.log('Must be FALSE =>', canMakeWordCloud(['my', 'city', 'rules'], ['my', 'city', 'my', 'rules'])); // false
console.log('Must be TRUE =>', canMakeWordCloud(['my', 'city', 'rules', 'my', 'team', 'wins', 'my'], ['my', 'rules', 'my', 'city'])); // true
console.log('Must be FALSE =>', canMakeWordCloud(['my', 'rules', 'my', 'team', 'wins', 'my'], ['my', 'rules', 'my', 'city'])); // false
console.log('Must be FALSE =>', canMakeWordCloud([], ['my', 'city', 'drools'])); // false
console.log('Must be TRUE =>', canMakeWordCloud(['my', 'city', 'drools'], [])); // true
