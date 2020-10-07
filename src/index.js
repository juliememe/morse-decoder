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
};

function decode(expr) {
    let decodedStr = '';
    for (let i = 0; i < expr.length; i+=10) {
       let morze = expr.slice(i, i+10);
       if(morze === '**********'){
           decodedStr+= ' ';
           continue;
       }
       let morzeChar ='';
       for (let j = 0; j < morze.length; j+=2) {
           let element = morze.slice(j, j+2);
           if(element !== '00'){
                morzeChar += element === '10' ? '.' : '-';
           }
           
       }
  
        decodedStr += MORSE_TABLE[morzeChar];
    }
    return decodedStr;
}

module.exports = {
    decode
}