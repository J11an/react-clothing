import { useContext } from "react";
import ProductCard from "../../Components/product-card/product-card.component";
import { ProductContext } from "../../contexts/products.context";
import "../shop/shop.styles.scss";

const Shop = () => {

    const {products} = useContext(ProductContext);
    return (
        <div className="products-container">
            {products.map((product)=>{
                return(

                    <ProductCard key = {product.id} product={product}></ProductCard>
                );       

            })}
        </div>
    );
}

export default Shop;