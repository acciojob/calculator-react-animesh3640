import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperatorClick = (op) => {
    if (num1 === '' || num2 === '') {
      setError(`Error: ${num1 === '' ? 'num1 cannot be empty' : 'num2 cannot be empty'}`);
    } else {
      setError('');
      setOperator(op);
      switch (op) {
        case '+':
          setResult(parseFloat(num1) + parseFloat(num2));
          break;
        case '-':
          setResult(parseFloat(num1) - parseFloat(num2));
          break;
        case '*':
          setResult(parseFloat(num1) * parseFloat(num2));
          break;
        case '/':
          setResult(parseFloat(num1) / parseFloat(num2));
          break;
        default:
          setResult('');
          break;
      }
    }
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <h1>React Calculator</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input type="text" value={num1} onChange={handleNum1Change} placeholder="Enter num1" />
        <input type="text" value={num2} onChange={handleNum2Change} placeholder="Enter num2" />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button onClick={() => handleOperatorClick('+')}>+</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>
          <button onClick={() => handleOperatorClick('*')}>*</button>
          <button onClick={() => handleOperatorClick('/')}>/</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {result !== '' && (
          <p style={{ color: 'green' }}>
            Success: Your result is {result}
          </p>
        )}
      </div>
    </div>
  );
};

export default Calculator; 
