function fillWord(word, maxlength,char) {
    const parameter= char[0];
    const lengthWord = word.length;
    const fillCaracter = maxlength - lengthWord;
    let newWord = word;
    if (fillCaracter > 0)
        for (let i = 0; i < fillCaracter ; i++) {
            newWord = parameter + newWord
        } 
    return (newWord)
    
}
module.exports = fillWord;