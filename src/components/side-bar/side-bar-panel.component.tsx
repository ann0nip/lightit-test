import { useState } from "react";
import LeftArrow from '../../assets/icons/activo.png'

interface ISideBarPanelProps {
    showSidebar: boolean,
    handleCloseSidebar: () => void
}

const SideBarPanel = ({ showSidebar, handleCloseSidebar }: ISideBarPanelProps) => {
    return (
        <>
            <div
                className={`flex top-0 left-[-520px] w-[520px] bg-[#F7F7F7] ml-24 text-white absolute h-full ease-in-out duration-300 ${showSidebar ? "translate-x-full" : "translate-x-0"
                    }`}
            >
                <div className="relative flex flex-1">
                    content
                    <div className="absolute right-0 flex items-center h-full">
                        <button onClick={handleCloseSidebar} className='toggle w-[20px]'>
                            <img src={LeftArrow} alt="close sidebar" className={`-rotate-90 ${showSidebar ? 'block' : 'hidden'}`} />
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default SideBarPanel;