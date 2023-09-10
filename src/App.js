import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions';

const App = () => {
  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch();
  return (
    <>
      <h1>Welcome to Redux</h1>
      <div className='container'>

        <h1>Increament/Decreament counter</h1>
        <h4>using React and Redux</h4>

        <div className='quantity'> 
          <a className='quantity_minus' title='Decreament' onClick={()=> dispatch(decNumber(5))}><span>-</span></a>
          <input name='quantity' type='text' className='quantity' value={myState} />
          <a className='quantity_plus' title='Increament' onClick={ ()=> dispatch(incNumber(5))}><span>+</span></a>
        </div>

      </div>
    </>
  );
};

export default App;
