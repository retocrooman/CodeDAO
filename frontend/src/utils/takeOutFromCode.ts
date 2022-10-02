export const takeOutFunctions = async (code: string) => {
  const functions: {[name: string]: string} = {};
  while(code.indexOf(' function ') !== -1) {
    const start = code.indexOf(' function ');
    const middle = code.indexOf('(', start);
    const end = await searchEnd(code, start);
    functions[code.slice(start+10,middle)] = code.slice(start+1, end);
    code = code.slice(end);
  }
  return functions;
}

export const takeOutStorage = async (code: string) => {
  const storage: {[nam: string]: string} = {};
  while(code.indexOf(' function ') !== -1) {
    const start = code.indexOf(' function ');
    const end = await searchEnd(code, start);
    code = code.slice(0, start) + code.slice(end);
  }
  const types = [' mapping', ' uint', ' bool', ' address', ' bytes'];
  while(true) {
    const word = checkWords(types, code);
    if (word === '') break;
    const { start, middle, end} = await searchWord2(word, code);
    storage[code.slice(middle+1, end-1)] = code.slice(start+1, end);
    code = code.slice(end);
  }
  return storage;
}

export const takeOutModifier = async (code: string) => {
  const events: {[name: string]: string} = {};
  while(code.indexOf(' modifiers ') !== -1) {
    const { start, middle, end} = await searchWord1(' modifiers ', code);
    events[code.slice(start+11,middle)] = code.slice(start+1, end);
    code = code.slice(end);
  }
  return events;
}

export const takeOutEvents = async (code: string) => {
  const events: {[name: string]: string} = {};
  while(code.indexOf(' event ') !== -1) {
    const { start, middle, end} = await searchWord1(' event ', code);
    events[code.slice(start+7,middle)] = code.slice(start+1, end);
    code = code.slice(end);
  }
  return events;
}

const searchEnd = async (code: string, start: number) => {
  let start1 = code.indexOf('{', start)+1;
  code.slice(start1);
  while(true) {
    const start2 = code.indexOf('{', start1)+1;
    const end = code.indexOf('}', start1)+1;
    if (start2 === 0 || start2 > end) return end;
    start1 = end;
  }
}

const checkWords = (words: string[], code: string) => {
  const length = words.length;
  for (let i=0; i<length; i++) {
    const word = words[i];
    if (code.indexOf(word) !== -1) return word;
  }
  return '';
}

const searchWord1 = async (word:string, code: string) => {
  const start = code.indexOf(word);
  const middle = code.indexOf('(', start);
  const end = code.indexOf(';', middle)+1;
  return {start, middle, end};
}

const searchWord2 = async (word: string, code: string) => {
  const start = code.indexOf(word);
  const end = code.indexOf(';', start)+1;
  const middle = code.lastIndexOf(' ', end);
  return {start, middle, end};
}