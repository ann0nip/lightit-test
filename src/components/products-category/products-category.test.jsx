import { MemoryRouter } from 'react-router-dom';

import { screen, render, cleanup } from '@testing-library/react';
import { AppContext } from '../../context/app.context';
import Products from '../../routes/products/products.component';

afterEach(cleanup);
describe('Product/ProductsCategory Component', () => {
  it('should render the ProductsCategory based in the URL', () => {
    const categoryName = 'aberturas';
    const route = `/${categoryName}`;

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

    expect(screen.getByTestId('product-category-title')).toHaveTextContent(
      categoryName,
    );
  });

  const mockedProducts = [
    {
      name: 'Puertas Mocked',
      items: [
        {
          name: 'Madera',
          img: 'https://www.abelenda.com.uy/wp-content/uploads/2018/08/puerta-con-masonite-lustrado.jpg',
        },
      ],
    },
    {
      name: 'Ventanas Mocked',
      items: [
        {
          name: 'Ventanal',
          img: 'https://midecoracion.com/wp-content/uploads/2019/02/diseno-ventanas-casa-768x432.jpg',
        },
      ],
    },
  ];
  it('should render two Products Categories', () => {
    const categoryName = 'aberturas';
    const route = `/${categoryName}`;

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

    const productNodes = screen.queryAllByTestId('product-name');
    expect(productNodes.length).toBe(2);

    expect(productNodes[0]).toHaveTextContent(mockedProducts[0].name);
    expect(productNodes[1]).toHaveTextContent(mockedProducts[1].name);
  });
});
