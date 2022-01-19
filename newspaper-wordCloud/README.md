# Newspaper & Word Cloud Challenge


Given a newspaper which is represented as an array of words, determine if you are able to generate the given word cloud which is also represented as an array of words.

**Considerations**
1. Words can be repeated in both the newspaper and word cloud.
2. You cannot use the same element from the newspaper multiple times, so if the word is repeated
in the word cloud you must find at least as many occurrences of that word in the newspaper.
3. The exercise examines full words, not parts of words or characters.

**Examples**
1. canMakeWordCloud(newspaper, wordCloud)
2. canMakeWordCloud(['my', 'city', 'rules', 'car', 'boat'], ['my', 'city', 'drools']) // false
3. canMakeWordCloud(['my', 'city', 'rules'], ['my', 'city', 'my', 'rules']) // false
4. canMakeWordCloud(['my', 'city', 'rules', 'my', 'team', 'wins', 'my'], ['my', 'rules', 'my', 'city']) // true
5. canMakeWordCloud(['my', 'rules', 'my', 'team', 'wins', 'my'], ['my', 'rules', 'my', 'city']) // false

```
const canMakeWordCloud = (newsPaper, wordCloud) => {
    for (newsWord of newsPaper) {
        const cloudIndex = wordCloud.indexOf(newsWord);
        if (cloudIndex > -1) {
            wordCloud.splice(cloudIndex, 1);
        }
        if (wordCloud.length === 0) {
            return true;
        }
    }
    return false;
};
```
