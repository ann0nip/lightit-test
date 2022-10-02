import Flecha from '../../assets/icons/Flecha.png';
import ZoomIn from '../../assets/icons/ZoomIn.png';
import ZoomOut from '../../assets/icons/ZoomOut.png';
import { NavigationControlsProps } from '../../utils/types';

const NavigationControls = ({ handleClick }: NavigationControlsProps) => {
  return (
    <div
      data-testid="navigation-controls"
      className="m-2 flex cursor-pointer flex-row border-[#979797]"
    >
      <div className="m-2 flex flex-col flex-wrap rounded-md bg-white">
        <div
          data-name="Zoom In"
          data-testid="Zoom In"
          onClick={handleClick}
          className="flex flex-1 items-center border-b"
        >
          <img src={ZoomIn} alt="Zoom In" />
        </div>
        <div
          data-name="Zoom Out"
          data-testid="Zoom Out"
          onClick={handleClick}
          className="flex flex-1 items-center"
        >
          <img src={ZoomOut} alt="Zoom Out" />
        </div>
      </div>
      <div className="m-2 flex h-24 w-24 flex-wrap rounded-md bg-white">
        <div className="flex w-8"></div>
        <div
          data-name="Flecha UP"
          data-testid="Flecha UP"
          onClick={handleClick}
          className="flex w-8"
        >
          <img src={Flecha} alt="Flecha UP" />
        </div>
        <div className="flex w-8"></div>

        <div
          data-name="Flecha Right"
          data-testid="Flecha Right"
          onClick={handleClick}
          className="flex w-8 -rotate-90"
        >
          <img src={Flecha} alt="Flecha Right" />
        </div>
        <div className="flex w-8"></div>
        <div
          data-name="Flecha Left"
          data-testid="Flecha Left"
          onClick={handleClick}
          className="flex w-8 rotate-90"
        >
          <img src={Flecha} alt="Flecha Left" />
        </div>

        <div className="flex w-8"></div>
        <div
          data-name="Flecha Down"
          data-testid="Flecha Down"
          onClick={handleClick}
          className="flex w-8 rotate-180"
        >
          <img src={Flecha} alt="Flecha Down" />
        </div>
        <div className="flex w-8"></div>
      </div>
    </div>
  );
};

export default NavigationControls;
