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
        img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    id:1},
        {price:899,
        title:'watch',
        qty:5,
        img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
        id:2},
        {price:89999,
        title:'Laptop',
         qty:1,
        img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
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
getCartTotal=()=>{
  const {products}=this.state;
  let count=0;
  products.forEach(product => {
    count +=product.price*product.qty;
    
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
      <div style={{font:20,padding:20}}>Total :{this.getCartTotal()}</div>
    
    </div>
  );
}
}

export default App;
