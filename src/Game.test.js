import React from 'react';
import {render} from '@testing-library/react';
import Game from './Game';

test('renders game container', () => {
    const {container} = render(<Game/>);
    expect(container.firstChild).toHaveClass('qame')
});
