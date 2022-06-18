import React from "react";

const CartItem =(props)=>{
        const {price ,title,qty} =props.product
        const{ product,onIncreaseQuantity,onDecreaseQuantity,onHandleDeleteProduct }=props
        return (
            <div className="cart-item">
            <div  className="left-block">
                <img style={styles.image} />
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:"gray"}}>Rs.{price}</div>
                <div style={{color:"gray"}}>Qty:{qty}</div>
                <div className="cart-item-actions">
                    {/* butttons */}
                <img alt ="increase"
                className="action-icons"
                 src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                 onClick={()=>onIncreaseQuantity(product)}/>
                <img alt ="decrease"
                className="action-icons"
                 src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                 onClick={()=>onDecreaseQuantity(product)}/>
                <img alt ="delete"
                className="action-icons" 
                src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1655500029~hmac=9205cf29b1f2f5ab1d91364aa7c8ea99"
                onClick={()=>onHandleDeleteProduct(product.id)}/>
                </div>
            </div>
            </div>
        )
    }



const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#CCC'
    }
}
export default CartItem;