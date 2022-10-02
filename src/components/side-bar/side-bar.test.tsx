import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import SideBar, { MENU_ITEMS } from './side-bar.component';
import { AppContext } from '../../context/app.context';

it('should render all menu items', async () => {
  const mockedValue = {
    showSidebar: false,
    setShowSidebar: () => {},
    products: [],
    setProducts: () => {},
    clearProductsList: () => {},
    categorySelected: null,
    setCategorySelected: () => {},
  };

  render(
    <AppContext.Provider value={mockedValue}>
      <SideBar />
    </AppContext.Provider>,
    { wrapper: BrowserRouter },
  );
  const categoryButtons = screen.queryAllByTestId('category-button');
  expect(categoryButtons.length).toBe(MENU_ITEMS.length);

  userEvent.click(categoryButtons[0]);

  expect(screen.getByText(MENU_ITEMS[0].name)).toBeInTheDocument();
});

it('should navigate when the user click one menu element', async () => {
  const mockedValue = {
    showSidebar: false,
    setShowSidebar: () => {},
    products: [],
    setProducts: () => {},
    clearProductsList: () => {},
    categorySelected: null,
    setCategorySelected: () => {},
  };

  render(
    <AppContext.Provider value={mockedValue}>
      <SideBar />
    </AppContext.Provider>,
    { wrapper: BrowserRouter },
  );
  const categoryButtons = screen.queryAllByTestId('category-button');
  userEvent.click(categoryButtons[0]);

  expect(screen.getByText(MENU_ITEMS[0].name)).toBeInTheDocument();
});
