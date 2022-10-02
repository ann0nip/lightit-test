import { screen, fireEvent, render, cleanup } from '@testing-library/react';
import NavigationControls from './navigation-controls.component';

const mockHandlerClick = jest.fn();

afterEach(cleanup);

describe('Button Component', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(
      <NavigationControls handleClick={mockHandlerClick} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should run the onClick event for Zoom In button', () => {
    render(<NavigationControls handleClick={mockHandlerClick} />);

    const buttonZoomIn = screen.getByTestId('Zoom In');
    fireEvent.click(buttonZoomIn);
    expect(mockHandlerClick.mock.calls).toHaveLength(1);
  });
  it('should run the onClick event for Zoom Out button', () => {
    render(<NavigationControls handleClick={mockHandlerClick} />);

    const buttonZoomOut = screen.getByTestId('Zoom Out');
    fireEvent.click(buttonZoomOut);
    expect(mockHandlerClick.mock.calls).toHaveLength(1);
  });
  it('should run the onClick event for Flecha UP button', () => {
    render(<NavigationControls handleClick={mockHandlerClick} />);

    const buttonFlechaUP = screen.getByTestId('Flecha UP');
    fireEvent.click(buttonFlechaUP);
    expect(mockHandlerClick.mock.calls).toHaveLength(1);
  });
  it('should run the onClick event for Flecha Right button', () => {
    render(<NavigationControls handleClick={mockHandlerClick} />);

    const buttonFlechaRight = screen.getByTestId('Flecha Right');
    fireEvent.click(buttonFlechaRight);
    expect(mockHandlerClick.mock.calls).toHaveLength(1);
  });
  it('should run the onClick event for Flecha Left button', () => {
    render(<NavigationControls handleClick={mockHandlerClick} />);

    const buttonFlechaLeft = screen.getByTestId('Flecha Left');
    fireEvent.click(buttonFlechaLeft);
    expect(mockHandlerClick.mock.calls).toHaveLength(1);
  });
  it('should run the onClick event for Flecha Down button', () => {
    render(<NavigationControls handleClick={mockHandlerClick} />);

    const buttonFlechaDown = screen.getByTestId('Flecha Down');
    fireEvent.click(buttonFlechaDown);
    expect(mockHandlerClick.mock.calls).toHaveLength(1);
  });
});
