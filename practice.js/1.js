const sortWord = word => {
    let arr = word.toLowerCase().split("");
    arr.sort();
    return arr.join("");
};

const solveJumbledWords = ({word, sampleDictionary}) => {
    let sortedWord = sortWord(word);

    for(let i=0;i<sampleDictionary.length;i++){
        if(sortWord(sampleDictionary[i]) === sortedWord){
            return sampleDictionary[i];
        }
    }

    return false;
};