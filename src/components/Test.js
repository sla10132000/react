import React from 'react';

export default function TodoApp({ test, tests, inputTask, addTask, redirectToError }) {
  return (
    <div>
      <input type="text" onChange={(e) => inputTask(e.target.value)} />
      <input type="button" value="add" onClick={() => addTask(test)} />
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
