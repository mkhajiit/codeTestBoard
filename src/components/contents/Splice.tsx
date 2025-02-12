// Filter 말고 Splice나 indexOf를 활용해서 주어진 배열에서 조건에 맞지않는 단어를 제거하기
// 결론 filter 쓰는게 훨씬 편하고 원본의 불변성을 유지할 수 있음
import React, { useState } from 'react';

function Splice() {
  const testCase = [
    'mind',
    'enjoy',
    'require',
    'admit',
    'permit',
    'aim',
    'give up',
    'hope',
    'postpone',
  ];

  const [input, setInput] = useState<string>('');

  const eraseElement = (input) => {};
  return (
    <div>
      <h1>동명사를 목적어로 가지는 동사가 아닌것을 입력하시오</h1>
      <h1>
        [
        {testCase.map((element) => {
          if (element !== testCase[testCase.length - 1]) {
            return element + ', ';
          } else {
            return element;
          }
        })}
        ]
      </h1>
      <label htmlFor='input'>제거할 단어 </label>
      <input name='input' value={input} onChange={(event) => setInput(event?.target.value)} />
      <button onClick={() => eraseElement(input)}>제거</button>
    </div>
  );
}

export default Splice;
