export const makeChart = async (name: string, array: {[name: string]: string[]}) => {
  let chart = '';
  const list: string[] = [];
  list.push(name);
  let count = 0;
  while(list.length !== 0) {
    const popName: string = list[0];
    list.shift();
    const length = array[popName].length;
    for(let i=0; i<length; i++) {
      const newName = array[popName][i];
      chart += `${popName}-->${newName}
      click ${newName} callback
      `;
      list.push(newName);
    }
    count++;
    if (count > 15) break;
  }
  return chart;
}