import Card from "./card";
import CategoryListing from "./categoryListing";


const ProductList=(props) =>{
    return (
        <Card>
            <h1>PRODUCTS</h1>
            <h2>Electronic Items</h2>
            {
            props.productList.map((item) =>{
                if(item.Category==="Electronics")
                 {   
                    return <CategoryListing productData={item} key="electronics" deleteBtnHandler={props.deleteBtnHandler}/>
                 }
                 else{
                    return ;
                }
                })
            }
            <h2>Food Items</h2>
            {
            props.productList.map((item) =>{
                if(item.Category==="Food")
                 {   
                    return <CategoryListing productData={item}  key="food" deleteBtnHandler={props.deleteBtnHandler}/>
                 }
                 else{
                    return ;
                }
                })
            }
            <h2>Skincare Items</h2>
            {
            props.productList.map((item) =>{
                if(item.Category==="Skincare")
                 {   
                    return <CategoryListing productData={item}  key="skincare" deleteBtnHandler={props.deleteBtnHandler}/>
                 }else{
                return ;
            }
                })
            }
        </Card>
    )
}

export default ProductList;