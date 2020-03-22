import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import User from './User'
import Money from './Money'
import Modal from './Modal'

class ToxicForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users : [
            {
                name: `David Cozar`,
                debt: 0
            },
            {
                name: `Pedro Marques`,
                debt: 0
            },
            {
                name: `Rafael Casado`,
                debt: 0
            },
            {
                name: `Raúl 'El Papo' Hernandez`,
                debt: 0
            }
        ],
        selectedUser: null,
        selectedAmount: null,
        totalAmount: 0,
        disableSubmitBtn: true,
        isModalOpen: false
      }

      this.handleUserClick = this.handleUserClick.bind(this);
      this.handleAmountClick = this.handleAmountClick.bind(this);
      this.handleInsertBtn = this.handleInsertBtn.bind(this);
      this.enableSubmit = this.enableSubmit.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
    }

    handleUserClick(data){
      this.setState({
        selectedUser: data
      }, ()=>{
        this.enableSubmit();
      });
    }

    handleAmountClick(data){
      this.setState({
        selectedAmount: data
      }, ()=>{
        this.enableSubmit();
      });
    }

    handleInsertBtn(e){
      e.preventDefault();
      const selectedUser = this.state.selectedUser;
      const selectedAmount = Number(this.state.selectedAmount);
      let totalAmount = Number(this.state.totalAmount);
      const users = this.state.users;
      const selectedUserInput = document.querySelector(`input[value="${selectedUser}"]`);
      const selectedAmountButton = document.querySelector(`button[value="${selectedAmount}"]`);
      selectedUserInput.parentElement.classList.remove('user-selected')
      selectedAmountButton.classList.remove('amount-selected')
      selectedUserInput.checked = false;
      users.forEach(user => {
        if(user.name === selectedUser){
          user.debt += selectedAmount;
          totalAmount += selectedAmount;
        }
      });
      this.setState({
        users: users,
        totalAmount: totalAmount.toFixed(2),
        selectedUser: null,
        selectedAmount: null,
        disableSubmitBtn: true
      });
    }

    enableSubmit(){
      const result = checkSubmitBtnState(this.state.selectedUser, this.state.selectedAmount);
      this.setState({
        disableSubmitBtn: result
      })
    }

    toggleModal(e){
      e.preventDefault();
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }

    render() {
      return (
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>QA TEAM</h1>
          <form>
            <h1 id='totalAmount'>Total debt: {this.state.totalAmount} €</h1>
            <button id='moreInfo' onClick={this.toggleModal}><small>Click to see more info</small></button>
            <Modal show={this.state.isModalOpen}
              onClose={this.toggleModal} userData={this.state.users}>
            </Modal>
            <p>Please select the toxic user:</p>
            <User users={this.state.users} handleUserClick={this.handleUserClick} />
            <Money handleAmountClick={this.handleAmountClick} />
            <div>
              <button id='sendButton' onClick={this.handleInsertBtn} disabled={this.state.disableSubmitBtn}>Submit</button>
            </div>
          </form>
        </div>
      );
    }
  }

export default ToxicForm;


function checkSubmitBtnState(selUser, selAmount){
  if(selUser && selAmount) return false;
  return true;
}