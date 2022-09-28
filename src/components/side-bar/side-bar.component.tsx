import cx from 'classnames';
import React, { useState } from 'react';

import Aberturas from '../../assets/icons/Aberturas.png'
import Equipamiento from '../../assets/icons/Equipamiento.png'
import Terminaciones from '../../assets/icons/Terminaciones.png'

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
    const [categorySelected, setCategorySelected] = useState<number>()

    const handleClick = (category: number) => {
        setCategorySelected(category)

    }
    return (
        <nav className='flex items-center'>
            <ul>
                {MENU_ITEMS.map((item) => (
                    <li key={item.id}>
                        <div onClick={() => handleClick(item.id)} className={cx('p-2 flex flex-col items-center hover:bg-[#F7F7F7]', {
                            'box-active': categorySelected === item.id
                        })}>
                            <div className='top'></div>
                            <img src={item.icon} alt={`${item.icon} button`} /><span className='text-xs'>{item.name}</span>
                            <div className='bottom'></div>
                        </div>
                    </li>
                ))}
            </ul >
        </nav >
    )
}



export default SideBar
