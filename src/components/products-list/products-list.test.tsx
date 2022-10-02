import { MemoryRouter } from 'react-router-dom';

import { screen, render, cleanup } from '@testing-library/react';
import { AppContext } from '../../context/app.context';
import Products from '../../routes/products/products.component';

afterEach(cleanup);
describe('Product/ProductsList Component', () => {
  it('should render the ProductsList based in the URL', () => {
    const categoryName = 'aberturas';
    const productName = 'puertas';
    const route = `/${categoryName}/${productName}`;

    const mockedValue = {
      showSidebar: true,
      setShowSidebar: () => {},
      products: [],
      setProducts: () => {},
      clearProductsList: () => {},
      categorySelected: null,
      setCategorySelected: () => {},
    };

    render(
      <MemoryRouter initialEntries={[route]}>
        <AppContext.Provider value={mockedValue}>
          <Products />
        </AppContext.Provider>
      </MemoryRouter>,
    );

    expect(screen.getByTestId('product-list-title')).toHaveTextContent(
      productName,
    );
  });

  const mockedProducts = [
    {
      name: 'Puertas',
      items: [
        {
          name: 'Madera',
          img: 'https://www.abelenda.com.uy/wp-content/uploads/2018/08/puerta-con-masonite-lustrado.jpg',
        },
        {
          name: 'Templo Ingles',
          img: 'https://www.abelenda.com.uy/wp-content/uploads/2018/08/Templo-Ingl%C3%A9s1.jpg',
        },
      ],
    },
  ];
  it('should render two puertas items', () => {
    const categoryName = 'aberturas';
    const productName = 'puertas';
    const route = `/${categoryName}/${productName}`;

    const mockedValue = {
      showSidebar: true,
      setShowSidebar: () => {},
      products: mockedProducts,
      setProducts: () => {},
      clearProductsList: () => {},
      categorySelected: null,
      setCategorySelected: () => {},
    };

    render(
      <MemoryRouter initialEntries={[route]}>
        <AppContext.Provider value={mockedValue}>
          <Products />
        </AppContext.Provider>
      </MemoryRouter>,
    );

    const productListTitle = screen.getByTestId('product-list-title');
    expect(productListTitle).toHaveTextContent(productName);

    const productListItems = screen.queryAllByTestId('product-list-item');
    expect(productListItems.length).toBe(2);

    expect(productListItems[0]).toHaveTextContent(
      mockedProducts[0].items[0].name,
    );
    expect(productListItems[1]).toHaveTextContent(
      mockedProducts[0].items[1].name,
    );
  });
});
