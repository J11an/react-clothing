import { useContext,Fragment } from "react";
import ProductCard from "../../Components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import "../shop/shop.styles.scss";

const Shop = () => {

    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <Fragment>
        {
            Object.keys(categoriesMap).map(title =>(
                <Fragment key = {title}>
                <h2>{title}</h2>
                <div className="products-container">
                    {categoriesMap[title].map((product)=>{
                        return(

                            <ProductCard key = {product.id} product={product}></ProductCard>
                        );       

                    })}
                </div>
                </Fragment>
            ))}
        </Fragment>
    );
}

export default Shop;