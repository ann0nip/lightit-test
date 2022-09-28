import Aberturas from '../../assets/icons/Aberturas.png'
import Equipamiento from '../../assets/icons/Equipamiento.png'
import Terminaciones from '../../assets/icons/Terminaciones.png'


const SideBar = () => {
    return (
        <nav className='flex items-center'>
            <ul>
                <li className='p-2 flex flex-col items-center hover:bg-gray-100'><img src={Aberturas} alt="aberturas button" /><span className='text-xs'>Aberturas</span></li>
                <li className='p-2 flex flex-col items-center hover:bg-gray-100'><img src={Equipamiento} alt="equipamiento button" /><span className='text-xs'>Equipamiento</span></li>
                <li className='p-2 flex flex-col items-center hover:bg-gray-100'><img src={Terminaciones} alt="terminaciones button" /><span className='text-xs'>Terminaciones</span></li>
            </ul>
        </nav>
    )
}



export default SideBar