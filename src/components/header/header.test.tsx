import { render } from '@testing-library/react'
import Header from './header.component'

it('should take a snapshot', () => {
   const { asFragment } = render(<Header />)

   expect(asFragment()).toMatchSnapshot()
})

