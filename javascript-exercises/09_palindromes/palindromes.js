const palindromes = function (word) {
    let tmp =String(word).toLowerCase();
    tmp = tmp.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    tmp =tmp.split('');
    tmp = tmp.reverse();
    tmp = tmp.join('')

    word = word.toLowerCase()
            .replace([/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")

    return tmp ===word;
};

// Do not edit below this line
module.exports = palindromes;
