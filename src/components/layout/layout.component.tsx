import React from 'react';
import Button from '../button/button.component';
import ContentWindow from '../content-window/content-window.component';
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
                <ContentWindow children={children} />
            </section>
        </React.Fragment>
    )
}



export default Layout