import { fireEvent, render, cleanup } from '@testing-library/react'
import NavigationControls from './navigation-controls.component';

const mockHandlerClick = jest.fn()

afterEach(cleanup);

describe('Button Component', () => {

    it('should take a snapshot', () => {
        const { asFragment } = render(<NavigationControls handleClick={mockHandlerClick} />)

        expect(asFragment()).toMatchSnapshot()
    })

    it('should run the onClick event for Zoom In button', () => {
        const { getByTestId } = render(<NavigationControls handleClick={mockHandlerClick} />)

        const buttonZoomIn = getByTestId('Zoom In')
        fireEvent.click(buttonZoomIn)
        expect(mockHandlerClick.mock.calls).toHaveLength(1)


    })
    it('should run the onClick event for Zoom Out button', () => {
        const { getByTestId } = render(<NavigationControls handleClick={mockHandlerClick} />)

        const buttonZoomOut = getByTestId('Zoom Out')
        fireEvent.click(buttonZoomOut)
        expect(mockHandlerClick.mock.calls).toHaveLength(1)


    })
    it('should run the onClick event for Flecha UP button', () => {
        const { getByTestId } = render(<NavigationControls handleClick={mockHandlerClick} />)

        const buttonFlechaUP = getByTestId('Flecha UP')
        fireEvent.click(buttonFlechaUP)
        expect(mockHandlerClick.mock.calls).toHaveLength(1)

    })
    it('should run the onClick event for Flecha Right button', () => {
        const { getByTestId } = render(<NavigationControls handleClick={mockHandlerClick} />)

        const buttonFlechaRight = getByTestId('Flecha Right')
        fireEvent.click(buttonFlechaRight)
        expect(mockHandlerClick.mock.calls).toHaveLength(1)

    })
    it('should run the onClick event for Flecha Left button', () => {
        const { getByTestId } = render(<NavigationControls handleClick={mockHandlerClick} />)

        const buttonFlechaLeft = getByTestId('Flecha Left')
        fireEvent.click(buttonFlechaLeft)
        expect(mockHandlerClick.mock.calls).toHaveLength(1)

    })
    it('should run the onClick event for Flecha Down button', () => {
        const { getByTestId } = render(<NavigationControls handleClick={mockHandlerClick} />)

        const buttonFlechaDown = getByTestId('Flecha Down')
        fireEvent.click(buttonFlechaDown)
        expect(mockHandlerClick.mock.calls).toHaveLength(1)

    })
})