import React from 'react';
import Button from '../button/button.component';
import Header from '../header/header.component';
import NavigationControls from '../navigation-controls/navigation-controls.component';
import SideBar from '../side-bar/side-bar.component';

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <React.Fragment>
            <Header />
            <section className='flex min-h-full h-full w-full'>
                <SideBar />

                <div className='flex flex-col justify-between flex-1 bg-gray-200'>
                    <div className='flex justify-end mt-4 mr-2'>
                        <Button label='Fijar' />
                        <Button label='Borrar' />
                    </div>
                    <div className='flex justify-end mb-4 mr-2 '>
                        <NavigationControls />
                    </div>
                </div>

            </section>
            <section>
                {children}
            </section>
        </React.Fragment>
    )
}



export default Layout