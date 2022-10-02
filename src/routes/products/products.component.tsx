import { Route, Routes } from 'react-router-dom';
import ProductsCategory from '../../components/products-category/products-category.component';
import ProductsList from '../../components/products-list/products-list.component';

const NoMatch = () => (
  <h1 className="m-auto flex text-gray-400">404 not category found</h1>
);

const Products = () => {
  return (
    <Routes>
      <Route path="/*">
        <Route path=":categoryName" element={<ProductsCategory />} />
        <Route path=":categoryName/:productsName" element={<ProductsList />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default Products;
