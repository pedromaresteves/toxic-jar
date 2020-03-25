import React from 'react';
import '../App.css';

function User(props) {
    function handleClick(e){
      const selectedUser = e.target.value;
      const usersDivs = document.querySelectorAll('.users div');
      const selectedInputParent = e.target.parentNode;
      usersDivs.forEach(item => {item.classList.remove('user-selected')})
      selectedInputParent.classList.add('user-selected')
      props.handleUserClick(selectedUser)
    }

      return(
      <div className='users'>
          {props.users.map((item, key) => {
              return <div className='test' key={key}><input type='radio' id={key} name='user' value={item.userName} onClick={handleClick}/><label htmlFor={key}>{item.userName}</label></div>
          })}
      </div>
      )
    }

export default User;