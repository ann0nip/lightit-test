import { useEffect, useState } from 'react';
import cx from 'classnames';

import Aberturas from '../../assets/icons/Aberturas.png'
import Equipamiento from '../../assets/icons/Equipamiento.png'
import Terminaciones from '../../assets/icons/Terminaciones.png'
import SideBarPanel from '../side-bar-panel/side-bar-panel.component';
import { useNavigate } from 'react-router-dom';

const MENU_ITEMS = [{
    id: 0,
    name: 'Aberturas',
    icon: Aberturas
}, {
    id: 1,
    name: 'Equipamiento',
    icon: Equipamiento
}, {
    id: 2,
    name: 'Terminaciones',
    icon: Terminaciones
}]

const SideBar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [categorySelected, setCategorySelected] = useState<string>()
    const navigate = useNavigate();

    useEffect(() => {
        categorySelected && navigate(`/${categorySelected}`)
        categorySelected && setShowSidebar(true)
    }, [categorySelected])

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    const handleClick = (category: string) => {
        setCategorySelected(category.toLowerCase())
    }
    return (
        <div className='relative flex items-center'>
            <nav className='w-24 h-full flex justify-center items-center bg-white z-40'>
                <ul>
                    {MENU_ITEMS.map((item) => (
                        <li key={item.id}>
                            <div onClick={() => handleClick(item.name)} className={cx('relative cursor-pointer p-2 flex flex-col items-center hover:bg-[#F7F7F7]', {
                                'box-active': categorySelected === item.name
                            })}>
                                <img src={item.icon} alt={`${item.icon} button`} /><span className='text-xs'>{item.name}</span>
                            </div>
                        </li>
                    ))}
                </ul >
            </nav>
            <SideBarPanel showSidebar={showSidebar} handleCloseSidebar={toggleSidebar} />
        </div >
    )
}



export default SideBar
