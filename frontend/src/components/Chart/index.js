let chart = `
graph TD
A(sender).->|JPYC|B(mint)
B(mint)-->|ERC20|C(_mint)
C(_mint)-->|ERC20|D(_beforeTransfer)
C(_mint)-->|ERC20|E(_totalSupply)
C(_mint)-->|ERC20|F(_balances)
C(_mint)-->|ERC20|G(Transfer)
click B "http://www.github.com" "This is a link"
`;

export default chart;