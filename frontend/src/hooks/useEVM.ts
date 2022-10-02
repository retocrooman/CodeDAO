const { EVM } = require('evm');
const provider = 'https://mainnet.infura.io/v3/' + process.env.REACT_APP_INFRA_API_KEY;
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(provider));

export const getFunctions = async (address: string) => {
  let functions:string[] = [];
  try {
    const byteCode = await web3.eth.getCode(address);
    const evm = new EVM(byteCode);
    functions = evm.getFunctions();
  } catch(error) {
    console.log(error);
  }
  if (functions.length === 0) {
    console.error('functions is empty');
    return [];
  }
  return functions;
}