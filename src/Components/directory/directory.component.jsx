import CardList from "../Card/card.component";

const Directory = ({categories}) => {

    return(
        <div className="directory-container">
        {categories.map((category)=> {
        return <CardList key = {category.id} category={category}/>
        })}
        </div>
        );
    }
export default Directory;
