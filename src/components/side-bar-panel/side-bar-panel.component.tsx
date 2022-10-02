import { useContext } from 'react';
import LeftArrow from '../../assets/icons/Activo.png';
import { AppContext, AppContextType } from '../../context/app.context';
import Products from '../../routes/products/products.component';

const SideBarPanel = () => {
  const { showSidebar, setShowSidebar, setCategorySelected } = useContext(
    AppContext,
  ) as AppContextType;

  const handleCloseSidebar = () => {
    setShowSidebar(!showSidebar);
    setCategorySelected(null);
  };

  return (
    <>
      <div
        className={`absolute top-0 left-[-520px] ml-24 flex h-full w-[520px] bg-[#F7F7F7] text-white duration-300 ease-in-out ${
          showSidebar ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="relative flex flex-1">
          <Products />
          <div className="absolute right-0 flex h-full items-center">
            <button onClick={handleCloseSidebar} className="toggle w-[20px]">
              <img
                src={LeftArrow}
                alt="close sidebar"
                className={`-rotate-90 ${showSidebar ? 'block' : 'hidden'}`}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarPanel;
