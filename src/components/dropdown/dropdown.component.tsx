import { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import arrow from '../../assets/icons/Activo.png';
import { DropdownOptionProps, DropdownProps } from '../../utils/types';

const Dropdown = ({ options = [], defaultOption }: DropdownProps) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownOptionProps>();
  const wrapperRef = useRef<HTMLDivElement>(null);

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
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleOptionChange = (selectedOption: DropdownOptionProps) => {
    setSelectedItem(selectedOption);
  };

  return (
    <div
      data-testid="dropdown-btn"
      onClick={handleClick}
      ref={wrapperRef}
      className="relative cursor-pointer border-[#979797]"
    >
      <div
        className={cx(
          'drop-shadow-input relative flex h-[41px] w-56 items-center justify-between rounded-lg bg-white pl-3 transition focus:outline-0 focus:drop-shadow-none',
          {
            'rounded-b-[0]': isDropDownOpen,
          },
        )}
      >
        <span>{selectedItem?.label || defaultOption?.label}</span>
        <div className="z-10 border-l">
          <img className="mx-2 -rotate-90" src={arrow} alt="arrow down" />
        </div>
      </div>
      {isDropDownOpen && (
        <ul
          data-testid="option-list"
          className="absolute block w-full items-center"
        >
          {options.map((option) => (
            <li
              data-testid="option-element"
              key={option.labelValue}
              onClick={() => handleOptionChange(option)}
              className="shadow-[inset_1px_0px_0px_rgba(0,0,0,0.2) drop-shadow-input relative flex bg-white p-2 transition hover:bg-gray-200 focus:outline-0 focus:drop-shadow-none"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
