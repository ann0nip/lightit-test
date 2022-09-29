import { Outlet } from 'react-router-dom';
import Layout from "../../components/layout/layout.component";

type HomeProps = {
    children: React.ReactNode
}

const Home = ({ children }: HomeProps) => {
    return (
        <Layout>
            {children}
        </Layout>
    );
};

export default Home;
