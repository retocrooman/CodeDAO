export const takeOutFunctions = async (code: string) => {
  const events: {[name: string]: string} = {};
  while(code.indexOf(' function ') !== -1) {
    const start = code.indexOf(' function ');
    const middle = code.indexOf('(', start);
    const end = await searchEnd(code, start);
    events[code.slice(start+10,middle)] = code.slice(start, end);
    console.log('start' + start);
    console.log('end' + end);
    console.log(code.slice(start, end));
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