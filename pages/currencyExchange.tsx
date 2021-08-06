// import { useEffect } from 'react';

// export default function currencyExchange() {
//   useEffect(() => {
//     document.querySelector('form').onsubmit = () => {
//       fetch('https://api.exchangeratesapi.io/latest?base=USD')
//         .then(response => response.json())
//         .then(data => {
//           const currency = document.querySelector('#currency').value;
//           const rate = data.rates[currency];
//           if (rate !== undefined) {
//             document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(
//               3
//             )} ${currency}}`;
//           } else {
//             document.querySelector('#resutl').innerHTML = 'Invalid currency';
//           }
//         });
//       return false;
//     };
//   },[]);
//   return (
//     <div>
//       <form>
//         <input id='currency' placeholder='Currency' type='text' />
//         <input type='submit' value='Convert' />
//       </form>
//       <div id='result'></div>
//     </div>
//   );
// }

export default function currencyExchange() {
  return <div>halaman currencyExchange</div>;
}
