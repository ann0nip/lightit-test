import { ReactComponent as Logo } from '../../assets/logo.svg';
import Dropdown from '../dropdown/dropdown.component';

const NavBar = () => {
    const buttonOptions = [{
        label: 'Guardar y salir',
        labelValue: 0
    }, {
        label: 'Salir sin guardar',
        labelValue: 1
    }, {
        label: 'Guardar y continuar',
        labelValue: 2
    }]
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-4 px-32">
            <div>
                <Logo className='fill-white' />
                <h1 className='text-gray-200'>Company Name</h1>
            </div>
            <Dropdown options={buttonOptions} defaultOption={buttonOptions[0]} />
        </nav>
    )
}



export default NavBar