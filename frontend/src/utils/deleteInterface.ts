export const deleteInterface = async (code: string) => {
  while(code.indexOf('interface') !== -1) {
    const start = code.indexOf('interface');
    const end = code.indexOf('}')+2;
    code = code.slice(0,start) + code.slice(end);
  }
  return code;
}