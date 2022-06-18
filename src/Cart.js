import React from "react";
import CartItem from "./CartItem";


class Cart extends React.Component {

    constructor(){
        super();
        this.state={
           products:[
            {price:14999,
            title:'Phone',
            qty:1,
            img:'',
        id:1},
            {price:899,
            title:'watch',
            qty:5,
            img:'',
            id:2},
            {price:89999,
            title:'Laptop',
             qty:1,
            img:'',
            id:3}
           ]

        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }

    handleIncreaseQuantity=(product)=>{
       const {products}=this.state
       const index =products.indexOf(product);
       products[index].qty +=1;

       this.setState({
        //as both have same name we can omit writing one
        products
       })
    }
    handleDecreaseQuantity=(product)=>{
        const {products}=this.state
        const index =products.indexOf(product);
        if(products[index].qty <1){
            return
        }
        products[index].qty -=1;
 
        this.setState({
         //as both have same name we can omit writing one
         products
        })
     }

     handleDeleteProduct=(id)=>{
        const {products}=this.state;
        const items=products.filter((item)=>item.id !== id);//array whose id is not equal
          this.setState({
            products:items
          })
    }
  
    render(){

        const {products} = this.state
        return (
            <div className="cart">
                {products.map((product)=>{
                return <CartItem product={product} key={product.id}
                 onIncreaseQuantity={this.handleIncreaseQuantity} 
                 onDecreaseQuantity={this.handleDecreaseQuantity}
                 onHandleDeleteProduct={this.handleDeleteProduct} />} )} 
            </div>
        )
    }
}
export default Cart;