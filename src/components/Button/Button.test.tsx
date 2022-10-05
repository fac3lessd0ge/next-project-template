import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import { Button, ButtonProps } from './Button';

const ButtonProps: ButtonProps = {

}

describe('<Button />', () => {
  test('it should mount', () => {
    render(<Button {...ButtonProps}/>);
    
    const button = screen.getByTestId('Button');

    expect(button).toBeInTheDocument();
  });
});
