import Layout from '../../components/layout/layout.component';
import { ChildrenType } from '../../utils/types';

const Home = ({ children }: ChildrenType) => {
  return <Layout>{children}</Layout>;
};

export default Home;
