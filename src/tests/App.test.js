import React from 'react';
import { render, fireEvent, waitForElement  } from '@testing-library/react';
import { App, shouldSubmitBtnRemainDisabled } from '../components/App';
import '../firebase/__mocks__/firestoreCalls';
jest.mock('../firebase/firestoreCalls')

let container, firstUser, firstUserInput, firstMoneyBtn, submitBtn, clearDebtBtn;

beforeEach(async ()=>{
    container = render(<App />).container;
    firstUser = await waitForElement(() => container.querySelectorAll('.users div')[0]);
    firstUserInput = await waitForElement(() => container.querySelectorAll('.users div')[0].children[0]);
    firstMoneyBtn = await waitForElement(() => container.querySelector('.money button'));
    submitBtn = await waitForElement(() => container.querySelector('#sendButton')); 
    clearDebtBtn = await waitForElement(() => container.querySelector('#clearAllDebt')); 
});

test('After clicking both in a user and in an amount button, the submit button is enabled', ()=>{
    expect(submitBtn.disabled).toBe(true);
    fireEvent.click(firstUserInput);
    expect(submitBtn.disabled).toBe(true);
    fireEvent.click(firstMoneyBtn);
    expect(submitBtn.disabled).toBe(false);
});

test('After clicking both in an amount button and then in a user, the submit button is enabled', ()=>{
    expect(submitBtn.disabled).toBe(true);
    fireEvent.click(firstMoneyBtn);
    expect(submitBtn.disabled).toBe(true);
    fireEvent.click(firstUserInput);
    expect(submitBtn.disabled).toBe(false);
});

test('After clicking submit, all added styles from clicking form items are removed and sendbutton is disabled', ()=>{
    fireEvent.click(firstUserInput);
    fireEvent.click(firstMoneyBtn);
    fireEvent.click(submitBtn);
    expect(submitBtn.disabled).toBe(true);
    firstUser.classList.forEach(item => {
        expect(item).not.toBe('user-selected');
    });
    firstMoneyBtn.classList.forEach(item => {
        expect(item).not.toBe('amount-selected');
    });
});

test('Test adding amount to total and clearing total.', ()=>{
    const totalAmountP = container.querySelector('#totalAmount');
    fireEvent.click(firstUserInput);
    fireEvent.click(firstMoneyBtn);
    fireEvent.click(submitBtn);
    expect(totalAmountP.innerHTML).toEqual(expect.stringMatching(Number(firstMoneyBtn.value).toFixed(2)));  
    fireEvent.click(clearDebtBtn);
    expect(totalAmountP.innerHTML).toEqual(expect.stringMatching('0.00'));  
});

test('Test fn checkSubmitBtnState. If any of the arguments is false, return true', ()=>{
    const shouldReturnTrue1 = shouldSubmitBtnRemainDisabled(false, false);
    const shouldReturnTrue2 = shouldSubmitBtnRemainDisabled(false, true);
    const shouldReturnTrue3 = shouldSubmitBtnRemainDisabled(true, false);
    expect(shouldReturnTrue1).toBe(true);
    expect(shouldReturnTrue2).toBe(true);
    expect(shouldReturnTrue3).toBe(true);
});

test('Test fn checkSubmitBtnState. If both arguments are true return false', ()=>{
    const shouldReturnFalse = shouldSubmitBtnRemainDisabled(true, true);
    expect(shouldReturnFalse).toBe(false);
});