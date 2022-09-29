interface IButtonProps {
    label: string;
    handleClick: (e: React.MouseEvent<HTMLElement>) => void
}

function Button({
    label,
    handleClick
}: IButtonProps) {

    return (
        <div data-testid='button-btn' data-name={label} onClick={handleClick} className="border-[#979797] cursor-pointer m-2">
            <div
                className='w-28 bg-white h-12 rounded-md focus:outline-0 focus:drop-shadow-none transition flex items-center justify-center'>
                <span>{label}</span>
            </div>
        </div>
    );
}

export default Button;
