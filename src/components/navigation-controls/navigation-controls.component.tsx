
import Flecha from '../../assets/icons/Flecha.png'
import ZoomIn from '../../assets/icons/ZoomIn.png'
import ZoomOut from '../../assets/icons/ZoomOut.png'

function NavigationControls() {

    const handleClick = () => {

    };

    return (
        <div data-testid='navigation-controls' onClick={handleClick} className="flex flex-row border-[#979797] cursor-pointer m-2">
            <div className='bg-white rounded-md flex flex-col flex-wrap m-2'>
                <div className='flex flex-1 items-center border-b'><img src={ZoomIn} alt="Zoom In" /></div>
                <div className='flex flex-1 items-center'><img src={ZoomOut} alt="Zoom Out" /></div>
            </div>
            <div className='w-24 bg-white h-24 rounded-md flex flex-wrap m-2'>
                <div className='w-8 flex'></div>
                <div className='w-8 flex'><img src={Flecha} alt="Flecha UP" /></div>
                <div className='w-8 flex'></div>

                <div className='w-8 flex -rotate-90'><img src={Flecha} alt="Flecha Right" /></div>
                <div className='w-8 flex'></div>
                <div className='w-8 flex rotate-90'><img src={Flecha} alt="Flecha Left" /></div>

                <div className='w-8 flex'></div>
                <div className='w-8 flex rotate-180'><img src={Flecha} alt="Flecha Down" /></div>
                <div className='w-8 flex'></div>

            </div>
        </div>
    );
}

export default NavigationControls;
