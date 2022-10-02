import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Dropdown from './dropdown.component';

afterEach(cleanup);

const buttonOptions = [
  {
    label: 'Guardar y salir',
    labelValue: 0,
  },
  {
    label: 'Salir sin guardar',
    labelValue: 1,
  },
  {
    label: 'Guardar y continuar',
    labelValue: 2,
  },
];

it('should render drop-down button', () => {
  render(<Dropdown options={[]} />);

  const dropDownButton = screen.queryByTestId('dropdown-btn');

  expect(dropDownButton).not.toBeNull();
});

it('should render drop-down options', () => {
  render(<Dropdown options={buttonOptions} />);

  const dropDownButton = screen.getByTestId('dropdown-btn');
  fireEvent.click(dropDownButton);

  const optionElements = screen.queryAllByTestId('option-element');
  expect(optionElements.length).toBe(3);
});

it('should support empty options', () => {
  render(<Dropdown options={[]} />);

  const dropDownButton = screen.getByTestId('dropdown-btn');
  fireEvent.click(dropDownButton);

  const optionElements = screen.queryAllByTestId('option-element');
  expect(optionElements.length).toBe(0);
});

it('should select the right option', () => {
  render(<Dropdown options={buttonOptions} />);

  const dropDownButton = screen.getByTestId('dropdown-btn');
  fireEvent.click(dropDownButton);

  const optionElement = screen.getAllByTestId('option-element');
  fireEvent.click(optionElement[1]);

  expect(dropDownButton).toHaveTextContent(buttonOptions[1].label);
});
