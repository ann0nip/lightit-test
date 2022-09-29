import Button from "../button/button.component"
import NavigationControls from "../navigation-controls/navigation-controls.component"

type ContentWindowProps = {
    children: React.ReactNode
}

const ContentWindow: React.FC<ContentWindowProps> = ({ children }) => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e.currentTarget.getAttribute('data-name'));
    };

    return (
        <div className='flex flex-col justify-between flex-1 bg-gray-200'>
            <div className='flex justify-end mt-4 mr-2'>
                <Button handleClick={handleClick} label='Fijar' />
                <Button handleClick={handleClick} label='Borrar' />
            </div>
            {children}
            <div className='flex justify-end mb-4 mr-2 '>
                <NavigationControls handleClick={handleClick} />
            </div>
        </div>
    )
}


export default ContentWindow