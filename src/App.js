import React from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';




class App extends React.Component {
  constructor(){
    super();
    this.state={
       products:[],
       loading:true

    }
    this.db=firebase.firestore();
    // this.increaseQuantity=this.increaseQuantity.bind(this);
}

componentDidMount(){
    // firebase
    // .firestore()
    // .collection('products')
    // .get()
    // .then((snapshot)=>{
    //   // console.log(snapshot);

    //   // snapshot.docs.map((doc)=>{
    //   //   console.log(doc.data());
    //   // });

    //   const products= snapshot.docs.map((doc)=>{
    //     const data=doc.data();
    //     data['id']=doc.id
    //     return data;
    //   });
    //   this.setState({
    //     products,
    //     loading:false
    //   })
    // })


    this.db
    .collection('products')
    // .where('price','==',999) for multiple finding use .where again
    // .orderBy() it will help in sorting 
    .onSnapshot((snapshot)=>{ //on every chnge it will fetch again
      // console.log(snapshot);

      // snapshot.docs.map((doc)=>{
      //   console.log(doc.data());
      // });

      const products= snapshot.docs.map((doc)=>{
        const data=doc.data();
        data['id']=doc.id
        return data;
      });
      this.setState({
        products,
        loading:false
      })
    })


}

handleIncreaseQuantity=(product)=>{
   const {products}=this.state
   const index =products.indexOf(product);

  const docRef=this.db.collection('products').doc(products[index].id);
 
  docRef
  .update({
    qty:products[index].qty +1
  })
  .then(()=>{
    console.log('Updated',)
  })
  .catch((err)=>{
    console.log('err',err);

  })

}
handleDecreaseQuantity=(product)=>{
    const {products}=this.state
    const index =products.indexOf(product);
    if(products[index].qty <1){
        return
    }
    const docRef=this.db.collection('products').doc(products[index].id);
 
    docRef
    .update({
      qty:products[index].qty -1
    })
    .then(()=>{
      console.log('Reduced',)
    })
    .catch((err)=>{
      console.log('err',err);
  
    })
 }

 handleDeleteProduct=(id)=>{
   
    // const items=products.filter((item)=>item.id !== id);//array whose id is not equal
    //   this.setState({
    //     products:items
    //   })

    const docRef=this.db.collection('products').doc(id);
    docRef
    .delete()
    .then(()=>{
      console.log('Deleted')
    })
    .catch((err)=>{
      console.log('err',err);
  
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

  addProduct=()=>{
    this.db
    .collection('products')
    .add({
      img:'',
      Price:599,
      qty:1,
      title:"wallet"
    })
    .then((docRef)=>{
      console.log(docRef,'product has added')
    })
    .catch((error)=>{console.log('error :',error)})
  }
  render(){
    const {products,loading} = this.state
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      {/* <button onClick={this.addProduct} style={{padding:20,fontSize:20}}>Add a Product</button> */}
      <Cart  
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity} 
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onHandleDeleteProduct={this.handleDeleteProduct} />
      {loading && <h1>Loading Products...</h1>}
      <div style={{font:20,padding:20}}>Total :{this.getCartTotal()}</div>
    
    </div>
  );
}
}

export default App;
