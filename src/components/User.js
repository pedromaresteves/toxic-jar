import React from 'react';
import '../App.css';

function User(props) {
    function handleClick(e){
      const selectedUserName = e.target.value;
      const selectedInputParent = e.target.parentNode;
      props.handleUserClick(selectedUserName)
      selectedInputParent.classList.add('user-selected');
      selectedInputParent.children[2].classList.remove('hide')
    }

    function handleClearClick(e){
      const selectedUserName = e.target.parentNode.parentNode.parentNode.children[0].value;
      props.handleClearClick(e, selectedUserName);
    }

      return(
      <div className='users'>
          {props.users.map((item, key) => {
              return (<div className='test' key={key}>
                <input type='radio' id={key} name='user' value={item.userName} onClick={handleClick}/>
                <label htmlFor={key}>{item.userName}</label>
                {item.debt ? <p className='userDebt hide'><small>This fat fuck owes {item.debt.toFixed(2)} € <button className='clearUserDebt' onClick={handleClearClick}>Clear Debt</button></small></p> : <p className='empty'></p>}
                </div>)
          })}
      </div>
      )
    }

export default User;