import React from 'react';
import ContentWindow from '../content-window/content-window.component';
import Header from '../header/header.component';
import SideBar from '../side-bar/side-bar.component';

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <div className='min-h-full h-full w-full'>
            <Header />
            <section className='flex h-[90%]'>
                <SideBar />
                <ContentWindow children={children} />
            </section>
        </div>
    )
}



export default Layout