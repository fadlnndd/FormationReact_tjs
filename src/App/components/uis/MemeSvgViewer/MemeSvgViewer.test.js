import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeSvgViewer from './MemeSvgViewer';
import { emptyMeme } from 'orsys-tjs-meme';

describe('<MemeSvgViewer />', () => {
  test('it should mount', () => {
    render(<MemeSvgViewer meme={emptyMeme}/>);
    
    const memeSvgViewer = screen.getByTestId('MemeSvgViewer');

    expect(memeSvgViewer).toBeInTheDocument();
  });
});