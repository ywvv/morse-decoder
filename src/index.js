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
  const arr = [];
  const arrMorse = [];
  let message = '';
  for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.slice(i, i + 10));
  }

  arr.forEach(el => {
    let strMorse = '';
    if (el === '**********') {
      arrMorse.push(' ');
    } else {
      for (let i = 0; i < 10; i += 2) {
        if (el[i] === '1' && el[i + 1] === '0') {
        strMorse += '.';
        }
        if (el[i] === '1' && el[i + 1] === '1') {
        strMorse += '-';
        }
      }
      arrMorse.push(strMorse);
    }
  });

  arrMorse.forEach(el => {
    if (el === ' ') {
      message += ' ';
    } else {
      message += MORSE_TABLE[el];
    }
  });

  return message;
}

module.exports = {
  decode
};