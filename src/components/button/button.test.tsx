import { fireEvent, render, cleanup } from '@testing-library/react'
import Button from './button.component'

const labelText = 'Label Text'
const mockHandlerClick = jest.fn()

afterEach(cleanup);

describe('Button Component', () => {
    it('should take a snapshot', () => {
        const { asFragment } = render(<Button label={labelText} handleClick={mockHandlerClick} />)

        expect(asFragment()).toMatchSnapshot()
    })

    it('should render the label', () => {
        const { container } = render(<Button label={labelText} handleClick={mockHandlerClick} />)

        expect(container).toHaveTextContent(labelText)
    })

    it('should run the onClick event', () => {
        const { getByText } = render(<Button label={labelText} handleClick={mockHandlerClick} />)
        const button = getByText(labelText)

        fireEvent.click(button)

        expect(mockHandlerClick.mock.calls).toHaveLength(1)
    })
})