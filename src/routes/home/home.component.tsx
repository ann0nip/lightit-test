import { Outlet } from 'react-router-dom';
import Layout from "../../components/layout/layout.component";


const Home = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};

export default Home;
