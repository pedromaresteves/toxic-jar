import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/ReactDefaultApp';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const add = (x,y) => x+y;
const total = (shipping, subTotal) => {
  return "$"+add(shipping, subTotal);
}

//MOCK FUNCTION
const addMock = jest.fn(()=>5);

test("Add function", () =>{
  const result = add(2,3);
  expect(result).toBe(5);
});

test("addMock function", () =>{
  const result = addMock(2,3);
  expect(addMock).toHaveBeenCalledTimes(1);
  expect(addMock).toHaveBeenCalledWith(2,3);
  expect(result).toBe(5);
});

test("Total function", () =>{
  const result = total(5,25);
  expect(result).toBe("$30");
});

test('Fake test', () => {
  expect(true).toBeTruthy();
});

