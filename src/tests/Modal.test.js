import React from 'react';
import { render } from '@testing-library/react';
import Modal from '../components/Modal';

test('If show is true, render modal element', () => {
    const { container } = render(<Modal show={true}
        onClose={mockHandle}
        userData={mockUsers}>>
      </Modal>);
    const fullModal = container.querySelector(".backdrop")
    expect(fullModal).toBeInTheDocument();
});

test('If show is false, do not render modal element', () => {
    const { container } = render(<Modal show={false}
        onClose={mockHandle}
        userData={mockUsers}>
      </Modal>);
    const fullModal = container.querySelector(".backdrop");
    expect(fullModal).not.toBeInTheDocument();
});

const mockHandle = jest.fn((param)=>param);
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