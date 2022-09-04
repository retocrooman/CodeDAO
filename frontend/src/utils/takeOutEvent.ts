export const takeOutEvents = async (code: string) => {
  const events: {[name: string]: string} = {};
  while(code.indexOf(' event ') !== -1) {
    const start = code.indexOf(' event ');
    const middle = code.indexOf('(', start);
    const end = code.indexOf(';', middle)+1;
    events[code.slice(start+7,middle)] = code.slice(start, end);
    code = code.slice(end);
  }
  return events;
}