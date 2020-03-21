import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToxicForm from '../components/ToxicForm';

test('After clicking both in a user and in an amount button, the submit button is enabled', ()=>{
    const { container } = render(<ToxicForm />);
    const firstUserInput = container.querySelectorAll('.users div')[0].children[0];
    const firstMoneyBtn = container.querySelector('.money button');
    const submitBtn = container.querySelector('#sendButton');
    expect(submitBtn.disabled).toBe(true);
    fireEvent.click(firstUserInput);
    expect(submitBtn.disabled).toBe(true);
    fireEvent.click(firstMoneyBtn);
    expect(submitBtn.disabled).toBe(false);
});

test('After clicking both in an amount button and then in a user, the submit button is enabled', ()=>{
    const { container } = render(<ToxicForm />);
    const firstUserInput = container.querySelectorAll('.users div')[0].children[0];
    const firstMoneyBtn = container.querySelector('.money button');
    const submitBtn = container.querySelector('#sendButton');
    expect(submitBtn.disabled).toBe(true);
    fireEvent.click(firstMoneyBtn);
    expect(submitBtn.disabled).toBe(true);
    fireEvent.click(firstUserInput);
    expect(submitBtn.disabled).toBe(false);
});

test('After clicking submit, all added styles from clicking form items are removed and sendbutton is disabled', ()=>{
    const { container } = render(<ToxicForm />);
    const firstUser = container.querySelectorAll('.users div')[0];
    const firstUserInput =firstUser.children[0];
    const firstMoneyBtn = container.querySelector('.money button');
    const submitBtn = container.querySelector('#sendButton');
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

test('After adding an amount, we update the Total Amount Value', ()=>{
    const { container } = render(<ToxicForm />);
    const firstUserInput = container.querySelectorAll('.users div')[0].children[0];
    const firstMoneyBtn = container.querySelector('.money button');
    const submitBtn = container.querySelector('#sendButton');
    const totalAmountP = container.querySelector('#totalAmount');
    fireEvent.click(firstUserInput);
    fireEvent.click(firstMoneyBtn);
    fireEvent.click(submitBtn);
    console.log(totalAmountP.innerHTML)
    expect(totalAmountP.innerHTML).toEqual(expect.stringMatching(Number(firstMoneyBtn.value).toFixed(2)));  
});
