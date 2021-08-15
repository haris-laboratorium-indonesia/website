import { useState } from 'react';
import MiniProjects from '@/components/MiniProjects';

export default function NumberGame() {
  function inputKeyPress(event) {
    if (event.key === 'Enter') {
      const answer = parseInt(state.response);
      if (state.num1 + state.num2 === answer) {
        setState({
          ...state,
          num1: Math.ceil(Math.random() * 10),
          num2: Math.ceil(Math.random() * 10),
          score: state.score + 1,
          response: '',
          incorrect: false,
        });
      } else {
        setState({
          ...state,
          score: state.score - 1,
          response: '',
          incorrect: true,
        });
      }
    }
  }

  function updateResponse(event) {
    setState({
      ...state,
      response: event.target.value,
    });
  }

  const [state, setState] = useState({
    num1: 1,
    num2: 2,
    response: '',
    score: 0,
    incorrect: false,
  });

  if (state.score === 10) {
    return <div className='mx-auto text-2xl text-green-500'>You win!</div>;
  }

  return (
    <MiniProjects title='Number Game'>
      <div className='flex flex-col items-center justify-center max-w-xl mx-auto'>
        <div className={state.incorrect ? 'incorrect' : ''}>
          {state.num1}+{state.num2}
        </div>
        <input
          className='pl-2 border border-gray-500'
          value={state.response}
          onChange={updateResponse}
          onKeyPress={inputKeyPress}
          autoFocus={true}
          //autoFocus={true} doesn't work
        />
        <div>Score : {state.score}</div>
      </div>
    </MiniProjects>
  );
}
