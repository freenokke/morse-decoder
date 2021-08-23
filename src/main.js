const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

const expr = "0000000010**********0000111010101010111100111011100000001011111110101011111010101010101010";

function decode(expr) {
    exprToArr = expr.split('');
    finalArr = [];

    while (exprToArr.length !== 0) {
        let newArr = exprToArr.slice(-10);
        exprToArr.length = exprToArr.length - 10;
        finalArr.push(newArr.join(''))
    };

    finalArr.reverse();

    morseArr = [];

    finalArr.forEach((item) => {
        newStr = item.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '');
        console.log(newStr);
        morseArr.push(newStr);
    });
    console.log(morseArr)

    let resultArr = [];

    for (let i = 0; i <= morseArr.length - 1; i++) {
        resultArr += MORSE_TABLE[morseArr[i]];
    }
    return resultArr;
}

console.log(decode(expr))