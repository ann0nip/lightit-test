import { render, cleanup } from '@testing-library/react'
import ContentWindow from './content-window.component';


afterEach(cleanup);

describe('Content Window Component', () => {

    it('should render the children', () => {
        const childrenText = 'Test'
        const childrenElement = <h1>{childrenText}</h1>

        const { getByText } = render(<ContentWindow>{childrenElement}</ContentWindow>)

        expect(getByText(childrenText)).toHaveTextContent(childrenText)
    })
})