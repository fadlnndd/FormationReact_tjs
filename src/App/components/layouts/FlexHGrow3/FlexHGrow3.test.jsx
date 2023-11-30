import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexHGrow3 from './FlexHGrow3';

describe('<FlexHGrow3 />', () => {
  test('it should mount', () => {
    render(<FlexHGrow3><div></div></FlexHGrow3>);
    
    const flexHGrow3 = screen.getByTestId('FlexHGrow3');

    expect(flexHGrow3).toBeInTheDocument();
  });
});