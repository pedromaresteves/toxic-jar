import React from 'react';
import '../App.css';

function Money(props) {
    function handleClick(e){
      e.preventDefault();
      const selectedValue = e.target.value;
      const moneyBtns = document.querySelectorAll('.money button');
      const selectedButton = e.target;
      moneyBtns.forEach(item => {item.classList.remove('amount-selected')})
      selectedButton.classList.add('amount-selected')
      props.handleAmountClick(selectedValue)
    }
    return(
    <div className='money'>
        <button onClick={handleClick} value='0.25'>0,25€</button>
        <button onClick={handleClick} value='0.5'>0,50€</button>
        <button onClick={handleClick} value='1'>1€</button>
    </div>
    )
  }

export default Money;