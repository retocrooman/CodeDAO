export const deleteComment = async (code: string) => {
  while(code.indexOf('/*') !== -1) {
    const start = code.indexOf('/*');
    const end = code.indexOf('*/')+2;
    code = code.slice(0,start) + code.slice(end);
  }
  return code;
}