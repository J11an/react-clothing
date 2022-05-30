import {Routes,Route} from 'react-router-dom';
import CategoriesPreview from '../categoriespreview/categories.component';
import Category from '../category/category.component';
import "../shop/shop.styles.scss";

const Shop = () => {

    return (
        <Routes>
            <Route index element = {<CategoriesPreview/>}></Route>
            <Route path = ":category"  element={<Category/>}></Route>
        </Routes>
    );
}

export default Shop;