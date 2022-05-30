import { useContext,Fragment } from "react";
import CategoryPreview from "../../Components/CategoryPreview/categorypreview.component";
import { CategoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {

    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <>
        {
            Object.keys(categoriesMap).map(title =>{
            const products = categoriesMap[title];
            return <CategoryPreview key = {title} title = {title} products={products}></CategoryPreview>        

               
        })}
        </>
    );
}

export default CategoriesPreview;