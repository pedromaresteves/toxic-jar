import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import User from './User'
import Money from './Money'
import Modal from './Modal'
const firestore = require('../firebase/firestoreCalls')

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users : [],
        selectedUserName: null,
        selectedAmount: null,
        totalAmount: 0,
        disableSubmitBtn: true,
        isModalOpen: false,
      }

      this.handleUserClick = this.handleUserClick.bind(this);
      this.handleAmountClick = this.handleAmountClick.bind(this);
      this.handleInsertBtn = this.handleInsertBtn.bind(this);
      this.enableSubmit = this.enableSubmit.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.handleClearClick = this.handleClearClick.bind(this);
    }
  
  componentDidMount() {
    firestore.getUsers(result => {
      let totalAmount = 0;
      result.forEach(item => totalAmount += item.debt)
      this.setState({
        users: result,
        totalAmount: totalAmount
      })
    });
  }

    handleUserClick(data){
      this.setState({
        selectedUserName: data
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
      const selectedUserName = this.state.selectedUserName;
      const selectedAmount = Number(this.state.selectedAmount);
      let totalAmount = Number(this.state.totalAmount);
      const users = this.state.users;
      const selectedUserInput = document.querySelector(`input[value="${selectedUserName}"]`);
      const selectedAmountButton = document.querySelector(`button[value="${selectedAmount}"]`);
      selectedUserInput.parentElement.classList.remove('user-selected')
      selectedAmountButton.classList.remove('amount-selected')
      selectedUserInput.checked = false;
      users.forEach(user => {
        if(user.userName === selectedUserName){
          user.debt += selectedAmount;
          totalAmount += selectedAmount;
        }
      });
      firestore.updateUsers(selectedUserName, selectedAmount)
      this.setState({
        users: users,
        totalAmount: totalAmount,
        selectedUserName: null,
        selectedAmount: null,
        disableSubmitBtn: true
      });
    }

    enableSubmit(){
      const result = shouldSubmitBtnRemainDisabled(this.state.selectedUserName, this.state.selectedAmount);
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

    clearUserDebt(selectedUserName){
      let totalAmount = this.state.totalAmount;
      const users = this.state.users;
      var arrToSend = (selectedUserName) ? selectedUserName : users;
      firestore.clearDebt(arrToSend);
      users.forEach(user =>{
        if(arrToSend.length > 1){
          totalAmount -= user.debt;
          user.debt = 0;
        } else{
          if(user.userName === selectedUserName[0].userName){
            totalAmount -= user.debt;
            user.debt = 0;
          }
        }
      });
      this.setState({
        users: users,
        totalAmount: totalAmount
      })
    }

    handleClearClick(e, selectedUserName){
      e.preventDefault();
      const users = this.state.users;
      if(!selectedUserName) return this.clearUserDebt();
      users.forEach(user => {
        if(user.userName === selectedUserName){
          return this.clearUserDebt([user]);
        }
      });
    }

    render() {
      return (
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>QA TEAM</h1>
          <button id='moreInfo' onClick={this.toggleModal}><small>Click to see more info</small></button>
          <form>
            <h1 id='totalAmount'>Total debt: {this.state.totalAmount.toFixed(2)} €</h1>
            <button id='clearAllDebt' onClick={this.handleClearClick}><small>Clear all debt</small></button>
            <Modal show={this.state.isModalOpen}
              onClose={this.toggleModal} userData={this.state.users}>
            </Modal>
            <p>Please select the toxic user:</p>
            <User users={this.state.users} handleUserClick={this.handleUserClick} handleClearClick={this.handleClearClick}/>
            <Money handleAmountClick={this.handleAmountClick} />
            <div>
              <button id='sendButton' onClick={this.handleInsertBtn} disabled={this.state.disableSubmitBtn}>Submit</button>
            </div>
          </form>
        </div>
      );
    }
  }


function shouldSubmitBtnRemainDisabled(selUser, selAmount){
  if(selUser && selAmount) return false;
  return true;
}

export {
  App,
  shouldSubmitBtnRemainDisabled
};