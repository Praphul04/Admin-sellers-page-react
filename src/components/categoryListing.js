import Card from "./card";

const CategoryListing=(props) =>{
    const deleteBtnHandler=(e) =>{
        props.deleteBtnHandler(e.target.id);
    }
    return (
        <Card>
            <ul key={props.productData.Category}>
                <li key={props.productData.ID}>
                {`Name: ${props.productData.Name} Price: ${props.productData.Price} Category: ${props.productData.Category}`}
                <button onClick={deleteBtnHandler} id={props.productData.ID}>Delete</button>
                </li>
            </ul>
        </Card>
    )
}

export default CategoryListing;