import React from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";

class App extends React.Component {
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

getCartCount=()=>{
  const {products}=this.state;
  let count=0;
  products.forEach(product => {
    count +=product.qty;
    
  });
  return count;
}
  render(){
    const {products} = this.state
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      <h1>Cart</h1>
      <Cart  
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity} 
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onHandleDeleteProduct={this.handleDeleteProduct} />
    </div>
  );
}
}

export default App;
