import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from './header.component';

describe('Header Component', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(
      <Router>
        <Header />
      </Router>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
