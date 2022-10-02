import { ChildrenType } from '../../utils/types';
import ContentWindow from '../content-window/content-window.component';
import Header from '../header/header.component';
import SideBar from '../side-bar/side-bar.component';

const Layout = ({ children }: ChildrenType) => {
  return (
    <div className="h-full min-h-full w-full">
      <Header />
      <section className="flex h-[90%]">
        <SideBar />
        <ContentWindow children={children} />
      </section>
    </div>
  );
};

export default Layout;
