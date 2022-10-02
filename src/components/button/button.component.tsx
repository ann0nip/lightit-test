import { ButtonProps } from '../../utils/types';

const Button = ({ label, handleClick }: ButtonProps) => {
  return (
    <div
      data-testid="button-btn"
      data-name={label}
      onClick={handleClick}
      className="m-2 cursor-pointer border-[#979797]"
    >
      <div className="flex h-12 w-28 items-center justify-center rounded-md bg-white transition focus:outline-0 focus:drop-shadow-none">
        <span>{label}</span>
      </div>
    </div>
  );
};

export default Button;
