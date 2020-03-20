import React from 'react';
import { render } from '@testing-library/react';
import FirstCompo from '../components/FirstCompo';

test('renders learn react link', () => {
    const { container, getByText } = render(<FirstCompo />);
    const toxicText = getByText(/Welcome to Toxic Jar, Jackass!/i);
    expect(container);
    expect(toxicText).toBeInTheDocument();
});


