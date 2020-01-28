import React from 'react';
import { render } from '@testing-library/react';
import App from '../App/App';


test('renders without crashing', () => {
  const {getByText} = render(<App />);
  const divElement = getByText(/app/i);
  expect(divElement).toBeInTheDocument();
});
