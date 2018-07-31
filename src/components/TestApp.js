import React from 'react';

export default function TodoApp({ test, tests, inputTest, addTest, redirectToError }) {
  return (
    <div>
      <input type="text" onChange={(e) => inputTest(e.target.value)} />
      <input type="button" value="add" onClick={() => addTest(test)} />
      <ul>
        {
          tests.map(function(item, i) {
            return (
              <li key={i}>{item}</li>
            );
          })
        }
      </ul>
      <button onClick={() => redirectToError()} >エラーページへ</button>
    </div>
  );
}
