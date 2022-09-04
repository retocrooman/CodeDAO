const axios = require('axios');

const urlFront = 'https://api.etherscan.io/api?module=contract&action=getsourcecode&address=';
const urlBack = '&apikey=' + process.env.REACT_APP_ETHERSCAN_API;

export const getEtherscan = async (address: string) => {
  if(address === '') {
    console.error('address is empty')
    return '';
  }
  let response = null;
  try {
    response = await axios.get(urlFront + address + urlBack);
  } catch (error) {
    console.log(error);
  };
  if (response === '') {
    console.error('response is empty');
    return '';
  }
  return response.data.result[0];
}