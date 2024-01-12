// this is designed to run in node idk about others

function prompt(promptText, callback) {
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readLine.question(promptText, (userInput) => {
        callback(userInput);
        readLine.close();
    });
}

function translateToLenish(englishInput, replacements) {
    let words = englishInput.split(' ');
    let translatedWords = [];

    for (let word of words) {
        if (word.toLowerCase().includes('lenish')) {
            translatedWords.push(word);
            continue;
        }

        for (let key in replacements) {
            const regex = new RegExp(key, 'gi');
            if (word.match(regex)) {
                word = word.replace(regex, match => {
                    if (match === match.toUpperCase()) {
                        return replacements[key].toUpperCase();
                    } else {
                        return replacements[key];
                    }
                });
            }
        }
        translatedWords.push(word);
    }

    return translatedWords.join(' ');
}

let replacements = {
    'oi': 'ko', 'en': 'meh', 'ck': 'kl', 'se': 'ne', 'noi': 'soi', 'ay': 'ys', 'lan': 'kan', 'ot': 'or', 'h': '', 'me': 'meh', 'ru': 'lu', 'min': 'men', 'on': 'en', 'iz': 'oz', 'z': 'ko', 'r': 'er', 'ue': 'u', 'no': 'mo', 'ai': 'a', 'ke': 'ko', 'ou': 'oy', 'ta': 'at', '\\:\\)': ':))', '\\:\\(': ':((', ':o': ':oo', 'an': 'ane', 'is': 'ez', 't': 'de', 'we': 'wr', 'ic': 'ik', 'ta': 'ti', 've': 'be', 's': 'ch', 'ng': 'gus', 'at': 'a', 'p': 'eroni', 'ank': 'nk', 'ios': 'seb', 'k': 'kk', 'id': 'ad', 'js': 'jos', 'que': 'qoo', 'aaa': 'eee', 'ia': 'iya', 'abc': 'qwe', 'nod': 'yee', 'rea': 'reena', 'cera': 'uety', 'og': 'awg', 'ey': 'oi', 'or': 'ro', 'we': 'ee', 'tr': 'rte', 'ost': 'asta', 'bmw': 'wmb', 'ly': 'ish', 'tion': 'shun', 'ing': 'in', 'y': 'eh', 'ful': 'som', 'ous': 'us', 'ess': 'ezz', 'ive': 'ib', 'ab': 'eb', 'od': 'ud', 'wad': 'wd', 'ta': 'to', 'ne': 'ns', 'loy': 'ly', 'fu': 'phie', 'ye': 'oyle', 'or': 'rof', 'ov': 'ph'
};

prompt('Enter your English phrase to convert it into Lenish: ', (englishInput) => {
    let lenishOutput = translateToLenish(englishInput, replacements);
    console.log('\n' + lenishOutput);
});
