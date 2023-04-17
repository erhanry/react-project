
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Breadcrumb from './Breadcrumb';

test('renders Breadcrumb', () => {
    const params = 'Login Page';
    render(
        <BrowserRouter>
            <Breadcrumb params={params}/>
        </BrowserRouter>
    );

    expect(screen.getByText(params)).toBeInTheDocument();
});