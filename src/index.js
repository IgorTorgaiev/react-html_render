import React from 'react';
import ReactDOM from 'react-dom';

// 1. Render Function

// const element = <p>This is the single sentence</p>;
// ReactDOM.render(element, document.getElementById('root'));

// ReactDOM.render(<p>That is the other way we can write the sentence</p>, document.getElementById('root'));

// 2. HTML Code

const myelement = (
  <table>
    <tr>
      <th>Name and Surname</th>
    </tr>
    <tr>
      <td>Igor</td>
    </tr>
    <tr>
      <td>Torgaiev</td>
    </tr>
  </table>
);
ReactDOM.render(myelement, document.getElementById('main'));


