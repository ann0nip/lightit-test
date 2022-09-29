interface IButtonProps {
    label: string;
}

function Button({
    label
}: IButtonProps) {

    const handleClick = () => {

    };

    return (
        <div data-testid='button-btn' onClick={handleClick} className="border-[#979797] cursor-pointer m-2">
            <div
                className='w-28 bg-white h-12 rounded-md focus:outline-0 focus:drop-shadow-none transition flex items-center justify-center'>
                <span>{label}</span>
            </div>
        </div>
    );
}

export default Button;
