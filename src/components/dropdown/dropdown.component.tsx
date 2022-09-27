import { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import arrow from '../../assets/icons/activo.png';

interface IDropdownOption {
    label: string;
    labelValue: string | number;
}

interface IDropdownProps {
    options: IDropdownOption[];
    defaultOption?: IDropdownOption;
}

function Dropdown({
    options,
    defaultOption,
}: IDropdownProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [selectedItem, setSelectedItem] = useState<IDropdownOption>();
    const wrapperRef = useRef<any>(null);

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsFocused(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [wrapperRef]);

    const onValueChange = (selectedValue: IDropdownOption) => {
        setSelectedItem(selectedValue);
        setIsFocused(false);
    };

    return (
        <div ref={wrapperRef} className="border-[#979797] relative">
            <div
                className={cx(
                    'w-56 bg-white h-[41px] rounded-lg drop-shadow-input pl-3 focus:outline-0 focus:drop-shadow-none transition relative flex items-center justify-between',
                    {
                        'rounded-b-[0]': isFocused,
                    }
                )}
                onClick={() => setIsFocused(!isFocused)}>
                <span>{selectedItem?.label || defaultOption?.label}</span>
                <div className="z-10 border-l">
                    <img className='mx-2 -rotate-90' src={arrow} alt="arrow down" />
                </div>
            </div>
            {isFocused && (
                <ul className="items-center block absolute w-full">
                    {options.map((option) => (
                        <li
                            key={option.labelValue}
                            onClick={() => onValueChange(option)}
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
