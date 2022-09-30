import { Route, Routes } from "react-router-dom";
import CategoryPanel from "../../components/category-panel/category-panel.component";

const Test = () => <h1>SHOULD BE PRODUCTS LIST</h1>

const NoMatch = () => <h1>404 not found</h1>

const Products = () => {
    return (
        <Routes>
            <Route path="/*">
                <Route path=":category" element={<CategoryPanel />} />
                <Route path=":category/:products" element={<Test />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
};

export default Products