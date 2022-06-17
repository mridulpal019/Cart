import React from "react";

class CartItem extends React.Component {
    constructor(){
        super();
        this.state={
            price:14999,
            title:'Phone',
            qty:1,
            img:''

        }
    }
    render(){
        const {price ,title,qty} =this.state;
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
                <img alt ="increase"className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png"/>
                <img alt ="decrease"className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
                <img alt ="delete"className="action-icons" src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1655500029~hmac=9205cf29b1f2f5ab1d91364aa7c8ea99"/>
                </div>
            </div>
            </div>
        )
    }
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