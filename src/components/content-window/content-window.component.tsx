import { ChildrenType } from '../../utils/types';
import Button from '../button/button.component';
import NavigationControls from '../navigation-controls/navigation-controls.component';

const ContentWindow = ({ children }: ChildrenType) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.getAttribute('data-name'));
  };

  return (
    <div className="flex flex-1 flex-col justify-between bg-gray-200">
      <div className="mt-4 mr-2 flex justify-end">
        <Button handleClick={handleClick} label="Fijar" />
        <Button handleClick={handleClick} label="Borrar" />
      </div>
      {children}
      <div className="mb-4 mr-2 flex justify-end ">
        <NavigationControls handleClick={handleClick} />
      </div>
    </div>
  );
};

export default ContentWindow;
