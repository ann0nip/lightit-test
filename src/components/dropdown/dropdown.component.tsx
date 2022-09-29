import { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import arrow from '../../assets/icons/Activo.png';

interface IDropdownOption {
    label: string;
    labelValue: string | number;
}

interface IDropdownProps {
    options: IDropdownOption[];
    defaultOption?: IDropdownOption;
}

function Dropdown({
    options = [],
    defaultOption,
}: IDropdownProps) {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<IDropdownOption>();
    const wrapperRef = useRef<any>(null);

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsDropDownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [wrapperRef]);

    useEffect(() => {
        setIsDropDownOpen(false);
    }, [selectedItem]);

    const handleClick = () => {
        setIsDropDownOpen(!isDropDownOpen)
    };

    const handleOptionChange = (selectedOption: IDropdownOption) => {
        setSelectedItem(selectedOption);
    };

    return (
        <div data-testid='dropdown-btn' onClick={handleClick} ref={wrapperRef} className="border-[#979797] relative cursor-pointer">
            <div
                className={cx(
                    'w-56 bg-white h-[41px] rounded-lg drop-shadow-input pl-3 focus:outline-0 focus:drop-shadow-none transition relative flex items-center justify-between',
                    {
                        'rounded-b-[0]': isDropDownOpen,
                    }
                )}>
                <span>{selectedItem?.label || defaultOption?.label}</span>
                <div className="z-10 border-l">
                    <img className='mx-2 -rotate-90' src={arrow} alt="arrow down" />
                </div>
            </div>
            {isDropDownOpen && (
                <ul data-testid="option-list" className="items-center block absolute w-full">
                    {options.map((option) => (
                        <li
                            data-testid="option-element"
                            key={option.labelValue}
                            onClick={() => handleOptionChange(option)}
                            className="p-2 shadow-[inset_1px_0px_0px_rgba(0,0,0,0.2) bg-white drop-shadow-input focus:outline-0 focus:drop-shadow-none transition relative flex hover:bg-gray-200">
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;
