// TODO: create a component that displays a single bakery item



function BakeryItem(props) {
    
	return (
		<div className="BakeryItem">
            <h3>Bakery Item:</h3>
            <p>Name: {props.item.name}</p>
            <p>Description: {props.item.description}</p>
            <p>Price: {props.item.price}</p>
            <img src={props.item.image}></img>
            <button onClick={()=>{props.addToCart(props.item)}}>Add to cart</button>
          
        </div>

	);
}

export default BakeryItem;