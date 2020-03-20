import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import User from '../components/User';

test('Selected User changes Style. Only one can change Style', () => {
    const { container } = render(<User users={mockUsers} handleUserClick={mockHandle}/>);
    const allUsers = container.querySelectorAll('.users div');
    const firstUser = allUsers[0];
    const firstUserInput = firstUser.children[0];
    const secondUser = allUsers[1];
    const secondUserInput = secondUser.children[0];
    fireEvent.click(firstUserInput);
    expect(firstUser.className).toEqual(expect.stringMatching('user-selected'));  
    fireEvent.click(secondUserInput);
    expect(secondUser.className).toEqual(expect.stringMatching('user-selected'));  
    expect(firstUser.className).not.toEqual(expect.stringMatching('user-selected'));  
});

const mockUsers = [
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
];

const mockHandle = jest.fn((param)=>param);