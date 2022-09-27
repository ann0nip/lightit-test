import { render } from '@testing-library/react'
import NavBar from './nav-bar.component'

it('should take a NavBar snapshot', () => {
   const { asFragment } = render(<NavBar />)

   expect(asFragment()).toMatchSnapshot()
})

