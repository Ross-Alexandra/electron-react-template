import { render, screen } from '@testing-library/react';

import { App } from './App';

beforeEach(() => {
    window.api = {
        exampleFunction: jest.fn(),
    };
});

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Get Hacking!/i);
    expect(linkElement).toBeInTheDocument();
});
