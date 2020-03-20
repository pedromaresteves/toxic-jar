import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Money from '../components/Money';

test('Selected Button changes Style. Only one can change Style', () => {
    const { container } = render(<Money handleAmountClick={mockHandle}/>);
    const firstMoneyBtn = container.querySelector('.money button');
    const secondMoneyBtn = container.querySelectorAll('.money button')[1];
    fireEvent.click(firstMoneyBtn);
    expect(firstMoneyBtn.className).toEqual(expect.stringMatching('amount-selected'));  
    fireEvent.click(secondMoneyBtn);
    expect(secondMoneyBtn.className).toEqual(expect.stringMatching('amount-selected')); 
    expect(firstMoneyBtn.className).not.toEqual(expect.stringMatching('amount-selected'));  
});

const mockHandle = jest.fn((param)=>param);