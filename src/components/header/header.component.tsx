import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Dropdown from '../dropdown/dropdown.component';

const Header = () => {
  const buttonOptions = [
    {
      label: 'Guardar y salir',
      labelValue: 0,
    },
    {
      label: 'Salir sin guardar',
      labelValue: 1,
    },
    {
      label: 'Guardar y continuar',
      labelValue: 2,
    },
  ];
  return (
    <header className="flex h-[10%] flex-wrap items-center justify-between bg-gray-800 p-4 px-32">
      <Link to="/">
        <Logo className="fill-white" />
        <h1 className="text-gray-200">Company Name</h1>
      </Link>
      <Dropdown options={buttonOptions} defaultOption={buttonOptions[0]} />
    </header>
  );
};

export default Header;
