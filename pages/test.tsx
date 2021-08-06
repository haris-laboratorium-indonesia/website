// import { useEffect } from 'react';

import { useEffect } from 'react';

// const Test = () => {
//   useEffect(() => {
//     document.querySelectorAll('button').forEach(button => {
//       button.onclick = function () {
//         document.querySelector('#hello').style.color = button.dataset.color;
//       };
//     });
//   });
//   return (
//     <>
//       <div id='hello'>Hello</div>
//       <button data-color='red'>Red</button>
//       <button data-color='blue'>Blue</button>
//       <button data-color='green'>Green</button>
//     </>
//   );
// };

// export default Test;

const Test = () => {
  // useEffect(() => {
  //   document.querySelector('select').onchange = function () {
  //     document.querySelector('#hello').style.color = this.value;
  //   };
  // });
  return (
    <>
      <div id='hello' className='text-3xl font-bold'>
        Hello!
      </div>
      <select className='w-20'>
        <option value='black'>Black</option>
        <option value='red'>Red</option>
        <option value='blue'>Blue</option>
        <option value='green'>Green</option>
      </select>
    </>
  );
};

export default Test;
