import { createContext, useEffect, useState } from 'react';
import { getProducts } from '../services/products.service';
import { ChildrenType, ProductsType } from '../utils/types';

export type AppContextType = {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
  products: ProductsType[];
  setProducts: (products: ProductsType[]) => void;
  clearProductsList: () => void;
  categorySelected: string | null;
  setCategorySelected: (category: string | null) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }: ChildrenType) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [categorySelected, setCategorySelected] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      clearProductsList();
      const response = await getProducts(categorySelected!);
      if (response) setProducts(response);
    };

    categorySelected && getData();
  }, [categorySelected]);

  const clearProductsList = () => setProducts([]);

  const value = {
    showSidebar,
    setShowSidebar,
    products,
    setProducts,
    clearProductsList,
    categorySelected,
    setCategorySelected,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
