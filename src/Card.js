import './css/card.css';
 
function Card(props){
   return<div className="card" >
              <img src={props.data.image} alt={props.data.name} />
             <div>
                 <h2>{props.data.name}</h2>
                 {/* <p><span> {props.data.category}</span></p> */}
                 <p> EGP {props.data.price.customer}.00</p>
                 {/* <p>{props.data.details}</p> */}
             </div>
                 <button >Add to Cart</button>
   </div>
   
}
export default Card;