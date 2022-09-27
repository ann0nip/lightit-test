import { render, cleanup, fireEvent, getAllByTestId } from '@testing-library/react'
import Dropdown from './dropdown.component';

afterEach(cleanup);

const buttonOptions = [{
    label: 'Guardar y salir',
    labelValue: 0
}, {
    label: 'Salir sin guardar',
    labelValue: 1
}, {
    label: 'Guardar y continuar',
    labelValue: 2
}]

it('should render drop-down button', () => {
    const { queryByTestId } = render(<Dropdown options={[]} />)

    const dropDownButton = queryByTestId('dropdown-btn')

    expect(dropDownButton).not.toBeNull()
})

it('should render drop-down options', () => {

    const { getByTestId } = render(<Dropdown options={buttonOptions} />)

    const dropDownButton = getByTestId('dropdown-btn')
    fireEvent.click(dropDownButton)

    const optionList = getByTestId('option-list')
    expect(optionList.children.length).toBe(3)

})

it('should support empty options', () => {

    const { getByTestId } = render(<Dropdown options={[]} />)

    const dropDownButton = getByTestId('dropdown-btn')
    fireEvent.click(dropDownButton)

    const optionList = getByTestId('option-list')
    expect(optionList.children.length).toBe(0)

})

it('should select the right option', () => {

    const { getByTestId, getAllByTestId } = render(<Dropdown options={buttonOptions} />)

    const dropDownButton = getByTestId('dropdown-btn')
    fireEvent.click(dropDownButton)

    const optionElement = getAllByTestId('option-element')
    fireEvent.click(optionElement[1])

    expect(dropDownButton).toHaveTextContent(buttonOptions[1].label)

})


