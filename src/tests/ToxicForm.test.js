import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToxicForm from '../components/ToxicForm';

test('Clicking submit, all added styles are removed', ()=>{
    const { container } = render(<ToxicForm />);
    const firstUser = container.querySelectorAll('.users div')[0];
    const firstUserInput =firstUser.children[0];
    const firstMoneyBtn = container.querySelector('.money button');
    const submitBtn = container.querySelector('#sendButton');
    fireEvent.click(firstUserInput);
    fireEvent.click(firstMoneyBtn);
    fireEvent.click(submitBtn);
    firstUser.classList.forEach(item => {
        expect(item).not.toBe('user-selected');
    });
    firstMoneyBtn.classList.forEach(item => {
        expect(item).not.toBe('amount-selected');
    });
})

