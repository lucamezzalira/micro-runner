const sequenceOfNumbers = (length) => {
    let num = [];
    for(let k = 0; k < length; k++){
        num.push(k)
    }
    return num;
}

module.exports = {
    sequenceOfNumbers: sequenceOfNumbers
}