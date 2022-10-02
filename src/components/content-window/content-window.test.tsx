import { screen, render, cleanup } from '@testing-library/react';
import ContentWindow from './content-window.component';

afterEach(cleanup);

describe('Content Window Component', () => {
  it('should render the children', () => {
    const childrenText = 'Test';
    const childrenElement = <h1>{childrenText}</h1>;

    render(<ContentWindow>{childrenElement}</ContentWindow>);

    expect(screen.getByText(childrenText)).toHaveTextContent(childrenText);
  });
});
