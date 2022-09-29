
import React from 'react';
import Flecha from '../../assets/icons/Flecha.png'
import ZoomIn from '../../assets/icons/ZoomIn.png'
import ZoomOut from '../../assets/icons/ZoomOut.png'

type NavigationControlsProps = {
    handleClick: (e: React.MouseEvent<HTMLElement>) => void
}

const NavigationControls = ({ handleClick }: NavigationControlsProps) => {

    return (
        <div data-testid='navigation-controls' className="flex flex-row border-[#979797] cursor-pointer m-2">
            <div className='bg-white rounded-md flex flex-col flex-wrap m-2'>
                <div data-name='Zoom In' data-testid='Zoom In' onClick={handleClick} className='flex flex-1 items-center border-b'><img src={ZoomIn} alt="Zoom In" /></div>
                <div data-name='Zoom Out' data-testid='Zoom Out' onClick={handleClick} className='flex flex-1 items-center'><img src={ZoomOut} alt="Zoom Out" /></div>
            </div>
            <div className='w-24 bg-white h-24 rounded-md flex flex-wrap m-2'>
                <div className='w-8 flex'></div>
                <div data-name='Flecha UP' data-testid='Flecha UP' onClick={handleClick} className='w-8 flex'><img src={Flecha} alt="Flecha UP" /></div>
                <div className='w-8 flex'></div>

                <div data-name='Flecha Right' data-testid='Flecha Right' onClick={handleClick} className='w-8 flex -rotate-90'><img src={Flecha} alt="Flecha Right" /></div>
                <div className='w-8 flex'></div>
                <div data-name='Flecha Left' data-testid='Flecha Left' onClick={handleClick} className='w-8 flex rotate-90'><img src={Flecha} alt="Flecha Left" /></div>

                <div className='w-8 flex'></div>
                <div data-name='Flecha Down' data-testid='Flecha Down' onClick={handleClick} className='w-8 flex rotate-180'><img src={Flecha} alt="Flecha Down" /></div>
                <div className='w-8 flex'></div>

            </div>
        </div>
    );
}

export default NavigationControls;
