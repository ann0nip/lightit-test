import { createContext, useState } from 'react';
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
