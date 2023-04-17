import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer', () => {
    render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    );

    expect(screen.getByText('Онлайн книжарница')).toBeInTheDocument();
});