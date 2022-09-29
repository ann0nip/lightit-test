import React from 'react';
import Header from '../header/header.component';
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

                <div className='flex-1 bg-gray-200'>
                    sidenav
                </div>

            </section>
            <section>
                {children}
            </section>
        </React.Fragment>
    )
}



export default Layout