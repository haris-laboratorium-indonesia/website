// import Layout from '../components/Layout';
// import Title from '@/components/Title';
// import { useEffect } from 'react';
// import Kalkulator from '../styles/Kalkulator.module.css';
// import Script from 'next/script';

// const kalkulator = () => {
//   class Calculator {
//     constructor(previousOperandTextElement, currentOperandTextElement) {
//     this.previousOperandTextElement = previousOperandTextElement;
//     this.currentOperandTextElement = currentOperandTextElement;
//     this.clear();
//     }

//     clear() {
//     this.currentOperand = '';
//     this.previousOperand = '';
//     this.operation = undefined;
//   }
//     delete() {}
//     appendNumber(number) {this.currentOperand = number}
//     choosOperation(operation) {}
//     compute() {}

//     updateDisplay(this.currentOperandTextElement.innerText = this.currentOperand) {}
//   }

//   const numberButtons = document.querySelectorAll('[data-number]');
//   const operationButtons = document.querySelectorAll('[data-operation]');
//   const equalsButtons = document.querySelector('[data-equals]');
//   const deleteButtons = document.querySelector('[data-delete]');
//   const allClearButtons = document.querySelector('[data-all-clear]');
//   const previousOperandButtons = document.querySelector('[data-previous-operand]');
//   const currentOperandButtons = document.querySelector('[data-current-operand]');

//   const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

//   numberButtons.forEach(button=>{
//     button.addEventListener('click', ()=>{
//       calculator.appendNumber(button.innerText)
//       calculator.updateDisplay(ya, ba)
//     }

//     )
//   })
//   return (
//     <>
//       <Script>
//         {`
//         <script>

//         </script>
//         `}
//       </Script>
//       <Layout
//         browserTitle='Kalkulator'
//         description='Kalkulator Matematika dan Fisika terbaik yang pernah dibuat.'
//       >
//         <Title name='Kalkulator' />
//         <div className={Kalkulator.calculatorGrid}>
//           <div className={Kalkulator.output}>
//             <div data-previous-operand className={Kalkulator.previousOperand}>
//               123+
//             </div>
//             <div data-current-operand className={Kalkulator.currentOperand}>
//               456
//             </div>
//           </div>
//           <button className={Kalkulator.spanTwo} data-all-clear>
//             AC
//           </button>
//           <button data-delete>DEL</button>
//           <button data-operation>∻</button>
//           <button data-number>1</button>
//           <button data-number>2</button>
//           <button data-number>3</button>
//           <button data-operation>*</button>
//           <button data-number>4</button>
//           <button data-number>5</button>
//           <button data-number>6</button>
//           <button data-operation>+</button>
//           <button data-number>7</button>
//           <button data-number>8</button>
//           <button data-number>9</button>
//           <button data-operation>-</button>
//           <button data-number>.</button>
//           <button data-number>0</button>
//           <button className={Kalkulator.spanTwo} data-equals>
//             =
//           </button>
//         </div>
//       </Layout>
//     </>
//   );
// };

// export default kalkulator;

// export default function haha() {
//   return <div>a</div>;
// }
import Layout from '@/components/Layout';
import Title from '@/components/Title';

function Box({ title }) {
  return (
    <div>
      <div className='text-center'>{title}</div>
      <div className='mt-2 duration-300 bg-white rounded-md shadow-md hover:shadow-lg h-52'></div>
    </div>
  );
}

const nama = [
  { nama: 'Kalkulator Biasa' },
  { nama: 'Kalkulator Saintifik' },
  { nama: 'Kalkulator Rumus' },
];

export default function kalkulator() {
  return (
    <Layout browserTitle='Kalkulator' description='Kalkulator'>
      <Title name='Kalkulator' />

      <div className='mb-5 -mt-5 text-center'>Hitung apapun yang perlu dihitung.</div>

      <div className='grid grid-cols-3 gap-5 mt-10'>
        {nama.map(a => (
          <Box title={a.nama}></Box>
        ))}
      </div>
    </Layout>
  );
}
