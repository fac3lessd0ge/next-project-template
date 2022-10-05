import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import { TemplateName, TemplateNameProps } from './TemplateName';

const TemplateNameProps: TemplateNameProps = {

}

describe('<TemplateName />', () => {
  test('it should mount', () => {
    render(<TemplateName {...TemplateNameProps}/>);
    
    const templateName = screen.getByTestId('TemplateName');

    expect(templateName).toBeInTheDocument();
  });
});
